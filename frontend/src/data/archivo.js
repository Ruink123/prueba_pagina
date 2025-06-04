import compu from "../assets/Carreras/reparacion_fontal.jpg";
import compu2 from "../assets/Carreras/reparacion_trasera.jpg";
import redes from "../assets/Carreras/redes.jpg";
import electricidad from "../assets/Carreras/electricidad_frontal.jpg";
import electricidad2 from "../assets/Carreras/electricidad_trasera.jpg";
import soldadura from "../assets/Carreras/soldadura.jpg";
import estructuras from "../assets/Carreras/estructuras1.png";
import carpinteria from "../assets/Carreras/carpinteria_frontal.jpg";
import carpinteria2 from "../assets/Carreras/carpinteria_trasera.jpg";
import torno from "../assets/Carreras/torno.png";
import motos from "../assets/Carreras/motos_frontal.jpg";
import motos2 from "../assets/Carreras/motos_trasera.jpg";
import musica from "../assets/Carreras/musica_trasera.jpg";
import musica2 from "../assets/Carreras/musica_trasera.jpg";
import ingles from "../assets/Carreras/ingles.jpg";
import progra from "../assets/Carreras/progra_frontal.jpg";
import progra2 from "../assets/Carreras/progra_trasera.jpg";
import paneles from "../assets/Carreras/paneles.jpg";

import steelBeamIcon from '/steel-beam_10393322.svg';
import latheIcon from '/lathe-machine_9472048.svg';
import weldingMaskIcon from '/welding-mask_4610697.svg';
import anchor from '/anchor_4338207.svg';


const Carreras1 = [
  {
    id: "reparacion",
    icon: "FaComputer",
    title: "Operador y reparador de computadoras",
    description: " carrera técnica.",
    imagen1: compu,
    imagen2: compu2,
  },

  {
    id: "redes",
    icon: anchor,
    title: "redes cisco computación",
    description: " carrera técnica.",
    imagen1: null,
    imagen2: redes,
  },

  {
    id: "electricidad",
    icon: "PiPlugChargingBold",
    title: "electricidad industrial y domiciliar",
    description: " carrera técnica.",
    imagen1: electricidad,
    imagen2: electricidad2,
  },

  {
    id: "soldadura",
    icon: weldingMaskIcon,
    title: "soldadura industrial",
    description: " carrera técnica.",
    imagen1: null,
    imagen2: soldadura,
  },

  {
    id: "estructuras",
    icon: steelBeamIcon,
    title: "estructuras metálicas livianas",
    description: " carrera técnica.",
    imagen1: null,
    imagen2: estructuras,
  },

  {
    id: "carpintería",
    icon: "GiDrill",
    title: "carpintería",
    description: " carrera técnica.",
    imagen1: carpinteria,
    imagen2: carpinteria2,
  },

  {
    id: "torno",
    icon: latheIcon, 
    title: "MECANICA DE TORNO Y FRESADORA",
    description: " carrera técnica.",
    imagen1: null,
    imagen2: torno,
  },

  {
    id: "motos",
    icon: "FaMotorcycle",
    title: "mecánica de motocicletas",
    description: " carrera técnica.",
    imagen1: motos,
    imagen2: motos2,
  },
  {
    id: "musica",
    icon: "SlEarphones",
    title: "academia de música",
    description: " carrera técnica.",
    imagen1: musica,
    imagen2: musica2,
  },

  {
    id: "ingles",
    icon: "BiSolidUserRectangle",
    title: " academia de inglés",
    description: " carrera técnica.",
    imagen1: null,
    imagen2: ingles,
  },
  {
    id: "programacion",
    icon: "FaCode",
    title: " Programación y desarrollo de software",
    description: " carrera técnica.",
    imagen1: progra,
    imagen2: progra2,
  },
  {
    id: "paneles",
    icon: "PiSolarPanelDuotone",
    title: "  paneles Solares",
    description: " carrera técnica.",
    imgen1: null,
    imagen2: paneles,
  },
];

export default Carreras1;
