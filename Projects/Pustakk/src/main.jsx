import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { FirebaseContextProvider } from "./context/FirebaseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>
    </BrowserRouter>
  </StrictMode>
);
