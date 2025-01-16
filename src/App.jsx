import { Suspense, useRef, useState } from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Components/Model";
import Modal from "./Components/Modal";
import { booleanToggle } from "./Components/ContextModal";
import "./App.css";
import { useFrame } from "@react-three/fiber";
import SmoothFlyCamera from "./Components/SmoothFlyCamera";

export default function App() {
  const btnHeight = -1.85;
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);

  const lightRef = useRef();
  const helperRef = useRef();

  // useFrame(() => {
  //   // Example: You can animate the light position or intensity
  //   lightRef.current.position.y = Math.sin(Date.now() * 0.001) * 2;
  // });

  const dataCallBack = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Performance View */}
      <Perf position="top-left" />
      {/* <OrbitControls /> */}
      {/* Luces */}
      {/* <pointLight
        ref={lightRef}
        position={2} // Position of the light in 3D space
        intensity={1} // Brightness of the light
        color={0xff0000} // Color of the light (Red in this case)
        distance={10} // Maximum distance that the light affects
      /> */}
      {/* <pointLightHelper ref={helperRef} args={[lightRef.current, 1]} /> */}
      <directionalLight position={[0, 10, 0]}></directionalLight>
      <ambientLight intensity={1}></ambientLight>
      {/* Prueba de objectos */}
        <Model
          path={"/TomasAquino2.glb"}
          size={0.1}
          position={[-5, -13, -10]}
          rotationY={Math.PI / 4}
        />
      <Html position={[-5, -1.85, -5.5]}>
        <button
          onClick={() => {
            setModalId(1);
            dataCallBack();
          }}
        >
          Cafeteria
        </button>
      </Html>
      <Html position={[-10, btnHeight, -8]}>
        <button
          onClick={() => {
            setModalId(2);
            dataCallBack();
          }}
        >
          Materiales
        </button>
      </Html>
      <Html position={[-2, btnHeight, -6]}>
        <button
          onClick={() => {
            setModalId(3);
            dataCallBack();
          }}
        >
          Industrial Estudiantil
        </button>
      </Html>
      <Html position={[-1, btnHeight, -9]}>
        <button
          onClick={() => {
            setModalId(4);
            dataCallBack();
          }}
        >
          Papeleria
        </button>
      </Html>
      <Html position={[-4.15, btnHeight, -13]}>
        <button
          onClick={() => {
            setModalId(5);
            dataCallBack();
          }}
        >
          Salones 100
        </button>
      </Html>
      <Html position={[-2, btnHeight, -15]}>
        <button
          onClick={() => {
            setModalId(6);
            dataCallBack();
          }}
        >
          Salones 200
        </button>
      </Html>
      <Html position={[-2, btnHeight, -15]}>
        <button
          onClick={() => {
            setModalId(7);
            dataCallBack();
          }}
        >
          Salones 300
        </button>
      </Html>
      <Html>
        <booleanToggle.Provider value={{ dataCallBack, isOpen }}>
          <Modal id={modalId} />
        </booleanToggle.Provider>
      </Html>
    </>
  );
}
