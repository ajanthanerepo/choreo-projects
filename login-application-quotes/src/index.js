import ReactDOM from "react-dom";
import React from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import App from "./App";

const config = {
    signInRedirectURL: "https://40b46b8d-dafd-44e0-8767-95a190272997.e1-eu-north-azure.choreoapps.dev",
    signOutRedirectURL: "https://40b46b8d-dafd-44e0-8767-95a190272997.e1-eu-north-azure.choreoapps.dev",
    clientID: "QCdEtLbi82BHPzXa_8Jfw6EMiGwa",
    baseUrl: "https://api.asgardeo.io/t/ajanthanorg",
    scope: ["openid", "profile"]
};


export const LoginApp = () => {
    return (
        <AuthProvider config={config}>
            <App />
        </AuthProvider>
    );
    
};

ReactDOM.render((<LoginApp />), document.getElementById("root"));




