import ballerinax/mysql;
import ballerinax/mysql.driver as _; 
import ballerina/sql;
import ballerina/log;

configurable string USER = ?;
configurable string PASSWORD = ?;
configurable string HOST = ?;
configurable int PORT = ?;
configurable string DATABASE = ?;

final mysql:Client dbClient = check new(
    host=HOST, user=USER, password=PASSWORD, port=PORT, database="quotes_db"
);

public type CarQuotes record {|
    int quote_id?;
    string model;
    string value;
    string rent;
|};

isolated function addQuotes(CarQuotes car) returns int|error {
    log:printInfo("Executing the Insert.");
    sql:ExecutionResult result = check dbClient->execute(`INSERT INTO car_quotes (quote_id, model, value, rent) VALUES (${car.quote_id}, ${car.model}, ${car.value}, ${car.rent})`);
    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Error occurred in fetching the Inserted ID value.");
    }
}

isolated function getAllCars() returns CarQuotes[]|error {
    CarQuotes[] carQuotes = [];
    stream<CarQuotes, error?> resultStream = dbClient->query(`SELECT * FROM car_quotes`);
    check from CarQuotes carQuote in resultStream
        do {
            carQuotes.push(carQuote);
        };
    check resultStream.close();
    return carQuotes;
}
