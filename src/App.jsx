import { useState } from "react";
import "./App.css";
import Model from "./Components/Model";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Controles de Usuario */}
      <OrbitControls />
      <ambientLight></ambientLight>
      {/* Prueba de objectos */}
      <Model path={"/hamburger-draco.glb"} size={0.1} />
    </>
  );
}
