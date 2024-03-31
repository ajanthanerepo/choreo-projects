import ballerina/http;
import ballerina/log;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["*"],
        allowCredentials: true,
        allowMethods: ["GET", "POST", "OPTIONS"]
    }
}

service /quotes/services on new http:Listener(9000) {
    
    isolated resource function post addCarQuotes(@http:Payload CarQuotes carQuotes) returns int|error? {
        log:printInfo("Adding Car Quotes to the Data Service");
        return addQuotes(carQuotes);
    }

    isolated resource function get allCarQuotes() returns CarQuotes[]|error? {
        log:printInfo("Retrieving Car Quotes from the Data Service");
        return getAllCars();
    }
}