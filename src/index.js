import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GLobalProvider } from "./context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GLobalProvider>
        <App />
      </GLobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
