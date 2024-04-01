import ballerina/http;
import ballerina/log;

const string ENDPOINT_URL = "https://660a62cd0f324a9a2884ddb5.mockapi.io/api/mock";

http:Client httpclient = check new (ENDPOINT_URL);

public function main() returns error? {
    log:printInfo("Task triggered Manually");
    http:Response response = check httpclient->/internal;
    json jsonResponse = check response.getJsonPayload();
    log:printInfo("Response Received for manual task" + jsonResponse.toString());
}