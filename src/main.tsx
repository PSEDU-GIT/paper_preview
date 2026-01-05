import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routers from "./route/routers.tsx";
import "./index.css";
import "psedu-math/style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
);
