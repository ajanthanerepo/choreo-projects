import ReactDOM from "react-dom";
import React from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import App from "./App";

const config = {
    signInRedirectURL: "https://615e45c5-185f-467c-8118-16efaadc0236.e1-eu-north-azure.choreoapps.dev",
    signOutRedirectURL: "https://615e45c5-185f-467c-8118-16efaadc0236.e1-eu-north-azure.choreoapps.dev",
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




