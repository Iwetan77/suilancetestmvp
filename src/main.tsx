import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import process from "process";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { LoginProvider } from "./context/LoginContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// const oAuthClientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
console.log("Environment Variable:", process.env.REACT_APP_GOOGLE_CLIENT_ID);
const OAuthClientID =
  "990820965273-2k75plcnsthraoj5b91adubs09l806sv.apps.googleusercontent.com";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={OAuthClientID}>
      <LoginProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
