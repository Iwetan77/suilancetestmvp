import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import process from "process";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react"
import { LoginProvider } from "./context/LoginContext.tsx";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";


const clerkPubKey = import.meta.env.VITE_CLERK_PUBKEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <LoginProvider>
      <ClerkProvider publishableKey={clerkPubKey} >
        <WalletProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </WalletProvider>
      </ClerkProvider>
      </LoginProvider>
  </StrictMode>
);
