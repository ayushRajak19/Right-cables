import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ Get root element safely
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// ✅ Create root once
const root = createRoot(rootElement);

// ✅ Render app with BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ✅ Dev-only performance logging
if (import.meta.env.DEV) {
  window.addEventListener("load", () => {
    const perfData = performance.getEntriesByType("navigation")[0];
    console.log(
      "Page Load Time:",
      perfData.loadEventEnd - perfData.loadEventStart,
      "ms"
    );
  });
}