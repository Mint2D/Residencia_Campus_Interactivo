import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import * as THREE from "three";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      camera={{
        near: 0.001,
        far: 400,
        fov: 90,
      }}
    >
      <App />
    </Canvas>
  </StrictMode>
);
