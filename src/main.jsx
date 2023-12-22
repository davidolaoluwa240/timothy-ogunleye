// Modules
import React from "react";
import { createRoot } from "react-dom/client";

// Components
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

// Styles
import "./main.css";

// Mount React To DOM
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
