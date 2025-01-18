import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./main.css";
import SmoothFlyCamera from "./Components/SmoothFlyCamera.jsx";
import LoadingScreen from "./Components/LoadingScreen.jsx";
import { Html, Text } from "@react-three/drei";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      shadows
      camera={{
        near: 0.01,
        far: 30,
        fov: 90,
        frustumCulled: true,
      }}
    >
      {/* Controles de Usuario */}
      <Suspense fallback={<LoadingScreen />}>
        <SmoothFlyCamera />
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>
);
