import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouteConfig from "./routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouteConfig />
    </StrictMode>
);
