import { useState } from "react";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Perf } from "r3f-perf";
import "./App.css";
import Model from "./Components/Model";
export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Performance View */}
      <Perf position="top-left" />
      {/* Controles de Usuario */}
      <OrbitControls />
      {/* Luces */}
      <ambientLight></ambientLight>
      <directionalLight position={[3, 3, 3]}></directionalLight>
      {/* Prueba de objectos */}
      <Model
        path={"/TomasAquinoV1.5.glb"}
        size={0.1}
        position={[0, -13, -10]}
        rotationY={Math.PI / 4}
      />
      {/* <Text3D>Tomas Aquino</Text3D> */}
    </>
  );
}
