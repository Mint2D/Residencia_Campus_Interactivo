import { useState } from "react";
import {
  OrbitControls,
  Text3D,
  FirstPersonControls,
  Center,
} from "@react-three/drei";
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
      {/* <ambientLight></ambientLight> */}
      <directionalLight position={3}></directionalLight>
      {/* Prueba de objectos */}
      {/* <Model
        path={"/ITT2.glb"}
        size={10}
        position={[-0.375, -0.3, 4.5]}
        rotationX={Math.PI / 2}
      /> */}
      <Model
        path={"/TomasAquino2.glb"}
        size={0.1}
        position={[-5, -13, -10]}
        rotationY={Math.PI / 4}
      />
      {/* <Text3D>Tomas Aquino</Text3D> */}
    </>
  );
}
