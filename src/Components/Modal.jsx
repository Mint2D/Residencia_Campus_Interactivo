import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css"; // Make sure to add the necessary CSS for styling
import { booleanToggle } from "./ContextModal";
function Modal({ id }) {
  const { isOpen, dataCallBack } = useContext(booleanToggle);
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
  };
  const modalContent = modalId[id] || null;

  return createPortal(
    <div className="Modal">
      {isOpen && modalContent && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={dataCallBack} className="close-btn">
              close
            </button>
            <h2>{modalId[id].nombre}</h2>
            <p>{modalId[id].descripcion}</p>
            <p>{modalId[id].numeroTelefonico}</p>
            <div></div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default Modal;

