import ballerina/task;
import ballerina/log;
import ballerina/http;

class Job {

    *task:Job;
    string msg;

    public function execute() {
        log:printInfo(self.msg);
        error? callCarQuotesAPIResult = self.callCarQuotesAPI();
        if callCarQuotesAPIResult is error {
            log:printError("Error occured invoking the API.");
        }
    }

    private function callCarQuotesAPI() returns error?{
        http:Client clientEP = check new ("localhost:9000");
        CarQuotes[] carQuotes = check clientEP->/quotes/services/allCarQuotes;
        log:printInfo("Response Received: " + carQuotes.toJsonString());
    }

    isolated function init(string msg) {
        self.msg = msg;
    }
}

task:JobId result = check task:scheduleJobRecurByFrequency(new Job("Executing the task for Retrieve the Quotes."), 60 );
