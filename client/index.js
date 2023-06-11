import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

// creates a root variable and renders our App component wrapped in BrowserRouter for react router functionality
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);