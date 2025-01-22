import { useRef, useState } from "react";
import { Html, Environment, EnvironmentCube } from "@react-three/drei";
import Model from "./Components/Model";
import Modal from "./Components/Modal";
import { booleanToggle } from "./Components/ContextModal";
import "./App.css";

export default function App() {
  const btnHeight = -1.85;
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const dataCallBack = () => setIsOpen(!isOpen);

  return (
    <>
      <Environment
        preset="sunset"
        background="true"
        backgroundBlurriness={10}
      />
      {/* Luces */}
      <directionalLight position={[0, 10, 5]}></directionalLight>
      <ambientLight intensity={1}></ambientLight>
      {/* Prueba de objectos */}
      <Model
        path={"/TomasAquinoExport1.glb"}
        size={0.1}
        position={[-5, -13, -8]}
        rotationY={Math.PI / 4}
      />
      <Html position={[-11, btnHeight, -6]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(1);
            dataCallBack();
          }}
        >
          Recursos <br/>Materiales
        </button>
      </Html>
      
      <Html position={[-9, btnHeight, -6]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(2);
            dataCallBack();
          }}
        >
          Lab. <br/>Electronico
        </button>
      </Html>
      <Html position={[-5, btnHeight, -2.5]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(3);
            dataCallBack();
          }}
        >
          Cafeteria
        </button>
      </Html>
      
      <Html position={[-3, btnHeight, -6]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(4);
            dataCallBack();
          }}
        >
          Coordinacion <br/>Industrial
        </button>
      </Html>
      <Html position={[-2, btnHeight, -4]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(5);
            dataCallBack();
          }}
        >
          Lab. Ciencias<br/>Basicas
        </button>
      </Html>
      <Html position={[-4, btnHeight, -11]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(6);
            dataCallBack();
          }}
        >
          Edificio 100
        </button>
      </Html>
      <Html position={[-2, btnHeight, -8]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(7);
            dataCallBack();
          }}
        >
          Papeleria
        </button>
      </Html>
      <Html position={[0, btnHeight, -6.5]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(8);
            dataCallBack();
          }}
        >
          Imprenta Escolar
        </button>
      </Html>
      <Html position={[1, btnHeight, -5]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(9);
            dataCallBack();
          }}
        >
          Enfermeria
        </button>
      </Html>
      <Html position={[2, btnHeight, -1]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(10);
            dataCallBack();
          }}
        >
          Edificio Academico 
        </button>
      </Html>
      <Html position={[4, btnHeight, -3]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(11);
            dataCallBack();
          }}
        >
          Edificio Administrativo
        </button>
      </Html>
      <Html position={[7, btnHeight, 2]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(12);
            dataCallBack();
          }}
        >
          Entrada
        </button>
      </Html>
      <Html position={[-2, btnHeight, -13]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(13);
            dataCallBack();
          }}
        >
          Edificio 200
        </button>
      </Html>
      <Html position={[4, btnHeight, -9]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(14);
            dataCallBack();
          }}
        >
          Edificio Q
        </button>
      </Html>
      <Html position={[8, btnHeight, -4]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(15);
            dataCallBack();
          }}
        >
          Edificio 91L
        </button>
      </Html>
      <Html position={[0, btnHeight, -15]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(16);
            dataCallBack();
          }}
        >
          Edificio 300
        </button>
      </Html>
      
      <Html position={[8, btnHeight, -8]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(17);
            dataCallBack();
          }}
        >
          Lab. I
        </button>
      </Html>
      <Html position={[10, btnHeight, -7]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(18);
            dataCallBack();
          }}
        >
          Coordinacion Sistemas
        </button>
      </Html>
      <Html position={[5, btnHeight, -14]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(19);
            dataCallBack();
          }}
        >
          Audiovisual
        </button>
      </Html>
      <Html position={[7.5, btnHeight, -12]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(20);
            dataCallBack();
          }}
        >
          Departamento de <br/>Des. Academico
        </button>
      </Html>
      <Html position={[10, btnHeight, -10]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(21);
            dataCallBack();
          }}
        >
          Lab. D
        </button>
      </Html>
      
      <Html position={[13, btnHeight, -9]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(22);
            dataCallBack();
          }}
        >
          Comites <br/>Estudiantiles
        </button>
      </Html>
      <Html position={[7, btnHeight, -17]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(23);
            dataCallBack();
          }}
        >
          Calafornix
        </button>
      </Html>
      <Html position={[9, btnHeight, -14]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(24);
            dataCallBack();
          }}
        >
          Edificio 400
        </button>
      </Html>
      <Html position={[13, btnHeight, -12]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(25);
            dataCallBack();
          }}
        >
          Edificio 500
        </button>
      </Html>
      <Html position={[11, btnHeight, -19]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(26);
            dataCallBack();
          }}
        >
          Biblioteca
        </button>
      </Html>
      <Html position={[14, btnHeight, -16]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(27);
            dataCallBack();
          }}
        >
          Electromecatronica
        </button>
      </Html>
      <Html position={[-5 , btnHeight, -8]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(28);
            dataCallBack();
          }}
        >
          ?
        </button>
      </Html>
      <Html position={[18, btnHeight, -12]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(29);
            dataCallBack();
          }}
        >
          Lab. Herramientas
        </button>
      </Html>
      <Html position={[20, btnHeight, -16]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(30);
            dataCallBack();
          }}
        >
          Lab. Quimica y <br/>Bioquimica
        </button>
      </Html>
      <Html position={[22, btnHeight, -14]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(31);
            dataCallBack();
          }}
        >
          Lab. Alimentos
        </button>
      </Html>
      <Html position={[23, btnHeight, -17]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(32);
            dataCallBack();
          }}
        >
          Lab. Microbiologia
        </button>
      </Html>
      <Html position={[25, btnHeight, -19]} distanceFactor={15}>
        <button
          className="button-30"
          role="button"
          onClick={() => {
            setModalId(33);
            dataCallBack();
          }}
        >
          Edificio 600
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
