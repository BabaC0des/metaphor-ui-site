import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "metaphor-ui/metaphor.css";
import "./site.css";

import { App } from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Missing #root");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
