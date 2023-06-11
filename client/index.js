import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.js';
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="main">
  <App />
  </div>
);