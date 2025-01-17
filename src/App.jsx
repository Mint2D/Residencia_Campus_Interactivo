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
      <Html position={[-5, -1.85, -5.5]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(1);
            dataCallBack();
          }}
        >
          Cafeteria
        </button>
      </Html>
      <Html position={[-10, btnHeight, -8]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(2);
            dataCallBack();
          }}
        >
          Materiales
        </button>
      </Html>
      <Html position={[-2, btnHeight, -6]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(3);
            dataCallBack();
          }}
        >
          Industrial Estudiantil
        </button>
      </Html>
      <Html position={[-1, btnHeight, -9]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(4);
            dataCallBack();
          }}
        >
          Papeleria
        </button>
      </Html>
      <Html position={[-4.15, btnHeight, -13]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(5);
            dataCallBack();
          }}
        >
          Edificio 100
        </button>
      </Html>
      <Html position={[-2, btnHeight, -15]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(6);
            dataCallBack();
          }}
        >
          Edificio 200
        </button>
      </Html>
      <Html position={[0, btnHeight, -18]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(7);
            dataCallBack();
          }}
        >
          Edificio 300
        </button>
      </Html>
      <Html position={[5, btnHeight, -4]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(8);
            dataCallBack();
          }}
        >
          Edificios Academico & Administrativo
        </button>
      </Html>
      <Html position={[4, btnHeight, -11]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(9);
            dataCallBack();
          }}
        >
          Edificio Q
        </button>
      </Html>
      <Html position={[9, btnHeight, -6]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(10);
            dataCallBack();
          }}
        >
          Edificio 91L
        </button>
      </Html>
      <Html position={[8, btnHeight, -10]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(11);
            dataCallBack();
          }}
        >
          Laboratorio L
        </button>
      </Html>
      <Html position={[10, btnHeight, -9]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(12);
            dataCallBack();
          }}
        >
          Coordinacion Sistemas
        </button>
      </Html>
      <Html position={[10, btnHeight, -9]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(13);
            dataCallBack();
          }}
        >
          Coordinacion Sistemas
        </button>
      </Html>
      <Html position={[12, btnHeight, -11]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(14);
            dataCallBack();
          }}
        >
          Laboratorio D
        </button>
      </Html>
      <Html position={[6, btnHeight, -15]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(15);
            dataCallBack();
          }}
        >
          Audiovisual
        </button>
      </Html>
      <Html position={[9, btnHeight, -16]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(16);
            dataCallBack();
          }}
        >
          Edificio 500
        </button>
      </Html>
      <Html position={[7, btnHeight, -19]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(17);
            dataCallBack();
          }}
        >
          Calafornix
        </button>
      </Html>
      <Html position={[11, btnHeight, -21]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(18);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[14, btnHeight, -18]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(19);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[14, btnHeight, -14]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(20);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[18, btnHeight, -14]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(21);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[20, btnHeight, -18]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(22);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[22, btnHeight, -16]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(23);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[23, btnHeight, -19]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(24);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[25, btnHeight, -21]} distanceFactor={15}>
        <button  class="button-30" role="button"
          onClick={() => {
            setModalId(25);
            dataCallBack();
          }}
        >
          Biblioteca
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
