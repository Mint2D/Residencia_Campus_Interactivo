import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css"; // Make sure to add the necessary CSS for styling
import { booleanToggle } from "./ContextModal";

function Modal({ id }) {
  const { isOpen, dataCallBack } = useContext(booleanToggle);
  const defaultimg = 'https://img.freepik.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-68032.jpg'
  const modalId = {
    1: {
      nombre: "Cafeteria",
      descripcion: "es un lugar que tiene comida",
      numeroTelefonico: "6648881111",
    },
    2: {
      nombre: "Materiales",
      descripcion: "es un lugar que contiene herramientas",
      numeroTelefonico: "N/A",
    },
    3: {
      nombre: "Industrial Estudiantil",
      descripcion: "Lugar para estudiantes industriales",
      numeroTelefonico: "6633224455",
    },
    4: {
      nombre: "Papeleria",
      descripcion:
        "Aqui los alumnos pueden comprar utiles escolares y hacer impresiones",
      numeroTelefonico: "6637509234",
    },
    5: {
      nombre: "Edificio 100",
      descripcion: "Aqui estan los salones 101, 102, 103, 104, 105",
      numeroTelefonico: "N/A",
    },
    6: {
      nombre: "Edificio 200",
      descripcion: "Aqui estan los salones 201, 202, 203, 204, 205",
      numeroTelefonico: "N/A",
    },
    7: {
      nombre: "Edificio 300",
      descripcion: "Aqui estan los salones 301, 302, 303, 304, 305",
      numeroTelefonico: "N/A",
    },
    8: {
      nombre: "Edificio Q",
      descripcion: "Aqui estan los salones q1, q2 y q3",
      numeroTelefonico: "N/A",
    },
    9: {
      nombre: "Administracion & Academico",
      descripcion:
        "Direccion academica, tesoria, vinculacion, idiomas y la consejeria de la escuela.",
      numeroTelefonico: "6634214453",
    },
    10: {
      nombre: "Edificio 91L",
      descripcion: "Salones de Ing. Sistemas Computacionales e Informatica.",
      numeroTelefonico: "N/A",
    },
    11: {
      nombre: "Laboratorio L",
      descripcion:
        "Laboratorio para estudiantes de Ingenieria en Sistemas Computaciones, TICS e Informatica",
      numeroTelefonico: "6637830915",
    },
    12: {
      nombre: "Coordinacion Sistemas",
      descripcion:
        "Aqui esta la coordinacion para la carrera de ingenieria en Sistemas Computacionales",
      numeroTelefonico: "6633223755",
    },
    13: {
      nombre: "Laboratorio D",
      descripcion:
        "Laboratorio para estudiantes de Sistemas Computacionales, TICS e Informatica",
      numeroTelefonico: "6633226665",
    },
    14: {
      nombre: "Audiovisual",
      descripcion: "Espacio para eventos y Conferencias",
      numeroTelefonico: "6633264235",
    },
    15: {
      nombre: "Calafornix",
      descripcion: "Teatro para eventos y conferencias importantes",
      numeroTelefonico: "6648924455",
    },
    16: {
      nombre: "Edificio 500",
      descripcion: "Salones 501, 502, 503, 504",
      numeroTelefonico: "N/A",
    },
    17: {
      nombre: "Biblioteca",
      descripcion: "Biblioteca del Insituto Tecnologico de Tijuana",
      numeroTelefonico: "6646578109",
    },
    18: {
      nombre: "Laboratorio de Mecatronica",
      descripcion: "Laboratorio para los estudiantes de Ing. Mecatronica",
      numeroTelefonico: "663957751",
    },
    19: {
      nombre: "Edificio 400",
      descripcion: "Salones 401, 402, 403, 404, 405",
      numeroTelefonico: "N/A",
    },
    20: {
      nombre: "Laboratorio de Manufactura",
      descripcion: "Laboratorio para estudiantes de Ingenieria Mecatronica",
      numeroTelefonico: "66437623",
    },
  };
  const modalContent = modalId[id] || null;
  return createPortal(
    <div className="Modal">
      {isOpen && modalContent && (
        <div className="modal">
          
          <div className="modal-content">
          <img src={modalId[id] && defaultimg} className="modal-img"></img>
            <button onClick={dataCallBack} className="close-btn">
              cerrar
            </button>
            <h2>{modalId[id].nombre}</h2>
            <p>{modalId[id].descripcion}</p>
            <p>{modalId[id].numeroTelefonico}</p>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default Modal;
