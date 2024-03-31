import ReactDOM from "react-dom";
import React from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import App from "./App";

const config = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
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




