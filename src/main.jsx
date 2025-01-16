import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      camera={{
        fov: 90,
        near: 0.01,
        far: 400,
      }}
    >
      <App />
    </Canvas>
  </StrictMode>
);
