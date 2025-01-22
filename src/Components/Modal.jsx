import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css"; // Make sure to add the necessary CSS for styling
import { booleanToggle } from "./ContextModal";

function Modal({ id }) {
  const { isOpen, dataCallBack } = useContext(booleanToggle);
  const defaultimg = 'https://img.freepik.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-68032.jpg'
  const modalId = {
    1: {
      nombre: "Recursos Materiales",
      descripcion: "Almacen, cerca de un estacionamiento con entrada al oeste del campus.",
      link:'https://www.tijuana.tecnm.mx/25952-2/',
      numeroTelefonico: "6646078400ext186",
      imagen:"/Recursos Materiales.jpg"
    },
    2: {
      nombre: "Laboratorio Electronico",
      descripcion: "Laboratorio a lado de la cafeteria.",
      numeroTelefonico: "",
      imagen:"Lab. Electronico.jpg"
    },
    3: {
      nombre: "Cafeteria",
      descripcion: "Cafeteria con comida casera para alumnos y docentes.",
      link:"",
      numeroTelefonico: "",
      imagen:"/Cafeteria.jpg"
    },
    4: {
      nombre: "Coordinacion Industrial",
      descripcion:"Coordinacion de el Departamento de Ing. Industrial, encargada por Ing. Karina Cecilia Arredondo Soto.",
      numeroTelefonico: "",
      link:"https://www.facebook.com/coordinacioningind",
      imagen:"/Coordinacion Industrial.jpg"
    },
    5: {
      nombre: "Laboratorio de Ciencas Basicas",
      descripcion: "Laboratorio a lado de Coordinacion Industrial",
      numeroTelefonico: "N/A",
      imagen:"/Lab. Ciencias Basicas.jpg"
    },
    6: {
      nombre: "Edificio 100",
      descripcion: "Aqui estan los salones 101, 102, 103, 104...109",
      numeroTelefonico: "",
      
    },
    7: {
      nombre: "Papeleria",
      descripcion: "Aqui se compran los materiales para los alumnos, hacen impresiones y tienen computadoras a costo por hora.",
      numeroTelefonico: "",
      imagen:"Papeleria.jpg"
    },
    8: {
      nombre: "Imprenta Escolar",
      descripcion: "Solia ser una imprenta para el periodico escolar, vaya que tiempos.",
      numeroTelefonico: "",
      imagen:"/Imprenta Escolar.jpg"
    },
    9: {
      nombre: "Enfermeria",
      descripcion:
        "Enfermeria de la escuela, contiene una enfermera.",
      numeroTelefonico: "",
      imagen:"/Enfermeria.jpg"
    },
    10: {
      nombre: "Edificio Academico",
      descripcion: "Contiene Desarrollo Academico y informes de Programas de Orientacion y Tutorias",
      link: "https://www.tijuana.tecnm.mx/desarrollo-academico/",
      numeroTelefonico: "Numero de Desarrollo Academico: 664078410",
      imagen:"/Edificio Academico-Edificio administrativo.jpg"
    },
    11: {
      nombre: "Edificio Administrativo",
      descripcion:
        "Aqui se encuentra direccion, financieros y gestion de tecnologias.",
      link:"https://www.tijuana.tecnm.mx/25952-2/",
        numeroTelefonico: "Numero de Direccion: 6646078400",
        
    },
    12: {
      nombre: "Entrada",
      descripcion:
        "Bienvenidos!",
      numeroTelefonico: "",
    },
    13: {
      nombre: "Edificio 200",
      descripcion:
        "Aqui estan los salones 201, 202, 203, 204...207.",
      numeroTelefonico: "",
      imagen:"/Edificio 200.jpg"
    },
    14: {
      nombre: "Edificio Q",
      descripcion: "Aqui estan los salones Q101, Q102,Q103 Y Q104.",
      numeroTelefonico: "",
      imagen:"/Edificio Q.jpg"

    },
    15: {
      nombre: "Edificio 91L",
      descripcion: "Aqui se encuentra los laboratorios 91L1...5 y los salones del 91L1...9305",
      numeroTelefonico: "",
      imagen:"/Edificio 91L.JPG"

    },
    16: {
      nombre: "Edificio 300",
      descripcion: "Aqui estan los salones 301, 302, 303, 304...311.",
      numeroTelefonico: "",
      imagen:"/Edificio 300.jpg"

    },
    17: {
      nombre: "Laboratorio de Computacion I",
      descripcion: "Laboratorio de Sistemas I, abajo se encuentran el centro de idiomas.",
      link: 'https://www.tijuana.tecnm.mx/idiomas/',
      numeroTelefonico: "",
      imagen:"/Lab. I.jpg"

    },
    18: {
      nombre: "Coordinacion de Sistemas",
      descripcion: "Coordinacion de el Departamento de Ing. SisComp; Industrial y Informatica, encargada por Claudia Selene Loreto Medina.",
      link:'https://www.facebook.com/itt.isc.coord',
      numeroTelefonico: "6641222576ext145",
      imagen:"/Coordinacion Sistemas.jpg"

    },
    19: {
      nombre: "Audiovisual",
      descripcion: "Aqui se dan presentaciones de diferentes disciplinas.",
      numeroTelefonico: "",
      imagen:"/Audiovisual.jpg"
    },
    20: {
      nombre: "Departamento de Desarrollo Academico",
      descripcion: "",
      link:"https://www.tijuana.tecnm.mx/25952-2/",
      numeroTelefonico: "",
      imagen:"/Departamento de Des. Academico.jpg"

    },
    21: {
      nombre: "Laboratorio D",
      descripcion: "Laboratorio de Sistemas.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Lab.D.jpg"
    },
    22: {
      nombre: "Comites Estudiantiles",
      descripcion: "Aqui se encuentra el comite quimico; bioquimico y electromecanico.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Comites Estudiantiles.jpg"

    },
    23: {
      nombre: "Teatro Calafornix",
      descripcion: "Teatro y corazon de las artes en el Tecnologico. Encargada por Blanca Gutierrez Gutierrez.",
      link:"https://www.tijuana.tecnm.mx/teatro-calafornix/",
      numeroTelefonico: "6646078400ext255",
      imagen:"/public/Calafornix.jpg"

    },
    24: {
      nombre: "Edificio 400",
      descripcion: "Aqui estan los salones 401, 402, 403, 404...407.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Edificio 400.jpg"

    },
    25: {
      nombre: "Edificio 500",
      descripcion: "Aqui estan los salones 501, 502, 503, 504...506.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Edificio 500.jpg"

    },
    26: {
      nombre: "Biblioteca",
      descripcion: "Aqui se encuentran cubicos, computadoras al uso libre, libros educativos. Encargada por Lic. Fabriola Fausto Trujillo.",
      link:"https://www.tijuana.tecnm.mx/biblioteca/",
      numeroTelefonico: "6646078443ext155",
      imagen:"/public//Biblioteca.jpg"

    },
    27: {
      nombre: "Electromecatronica",
      descripcion: "Encargado por Ing. Jesus Antonio Castillo Diaz.",
      link:"https://www.facebook.com/people/Coordinación-Electromecánica-TECNM/100093412853986/",
      numeroTelefonico: "6631263641",
      imagen:"/public/Electromecanica.jpg"

    },
    28: {
      nombre: "Lab. Produccion",
      descripcion: "Oops!",
      link:"",
      numeroTelefonico: "",
    },
    29: {
      nombre: "Laboratorio de Herramientas y Maquinaria",
      descripcion: "Ubicado atras de los salones 400.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Lab. Herramientas.jpg"

    },
    30: {
      nombre: "Laboratorio de Quimica y Bioquimica",
      descripcion: "Ubicado enfrente de los salones 500.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Lab. Quimica y Bioquimica.jpg"

    },
    31: {
      nombre: "Laboratorio de Alimentos",
      descripcion: "Ubicado enfrente de los salones 500.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Lab. Alimentos.jpg"

    },
    32: {
      nombre: "Laboratorio de Microbiologia",
      descripcion: "Ubicado enfrente de los salones 500.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Lab. Microbiologia.jpg"

    },
    33: {
      nombre: "Edificio 600",
      descripcion: "Aqui estan los salones 601, 602, 603, 604...605 y 2 audiovisuales.",
      link:"",
      numeroTelefonico: "",
      imagen:"/public/Edificio 600.jpg"

    },
  };
  const modalContent = modalId[id] || null;
  return createPortal(
    <div className="Modal">
      {isOpen && modalContent && (
        <div className="modal">
          <div className="modal-content">
          <img src={modalId[id].imagen?? defaultimg} className="modal-img"></img>
            <button onClick={dataCallBack} className="close-btn">
              cerrar
            </button>
            <h2>{modalId[id].nombre}</h2>
            {modalId[id].link && <a href={modalId[id].link}>Para informes presione aqui.</a>}
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
