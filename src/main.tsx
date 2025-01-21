import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import process from "process";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { LoginProvider } from "./context/LoginContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const OAuthClientID = import.meta.env.VITE_OAUTH_CLIENT_ID;
// const OAuthClientID = VITE_OAUTH_CLIENT_ID;

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
