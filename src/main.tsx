import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import process from "process";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react"
import { LoginProvider } from "./context/LoginContext.tsx";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBKEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <LoginProvider>
      <ClerkProvider publishableKey={clerkPubKey} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
      </LoginProvider>
  </StrictMode>
);
