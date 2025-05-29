import fondo from "../assets/vidaCfp/fondo1.jpg";
import cumple from "../assets/vidaCfp/cumple_bosco.jpg";
import festo from "../assets/vidaCfp/FESTO-AGOSTO.jpg";
import capilla from "../assets/vidaCfp/capilla.jpeg";
import reliquia from "../assets/vidaCfp/reliquia.jpg";
import zoom from "../assets/vidaCfp/zoom.jpg";

import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const newsData = [
  {
    id: 0,
    title: "207 CUMPLEAÑOS DE SAN JUAN BOSCO",
    date: "Agosto 2022",
    author: "Miguel López",
    description:
      "El pasado martes 16 de agosto de 2022, se celebró a lo grande el 207 cumpleaños de San Juan Bosco, un gran padre, maestro y amigo para los jóvenes, especialmente para los estudiantes del CFP P. Bartolomé Ambrosio de la zona 8 de Guatemala.",
    image: cumple,
  },
  {
    id: 1,
    title:
      "PARTICIPACIÓN DE JÓVENES EN FESTO 2022: FESTIVAL SALESIANO DE TALENTO ORATORIANO",
    date: "Agosto 2022",
    author: "Miguel López",
    description:
      "El domingo 14 de agosto de 2022, en el Gimnasio P. Hugo Santucci del CFP, se realizó el FESTO...",
    image: festo,
  },
  {
    id: 2,
    title:
      "LA CAPILLA PINARDI DEL CENTRO DE FORMACION PROFESIONAL P. BARTOLOME AMBROSIO",
    date: "Julio 2022",
    author: "Patty Castillo",
    description:
      "En el Centro de Formación, se encuentra la Capilla Pinardi, un lugar de encuentro y oración...",
    image: capilla,
  },
  {
    id: 3,
    title:
      "LAS RELIQUIAS DEL CENTRO DE FORMACION PROFESIONAL P. BARTOLOME AMBROSIO, SDB",
    date: "Julio 2022",
    author: "Patty Castillo",
    description:
      "Julio 2022 (Por: Patty Castillo) En el Centro de Formación Profesional P. Bartolomé Ambrosio. SDB, se encuentra la Capilla Pinardi, en cuyo interior se puede venerar el relicario salesiano, donde puedes encontrar reliquias de primer grado, siendo consideradas aquellos pequeños fragmentos de cuerpo de un santo ...",
    image: reliquia,
  },
  {
    id: 4,
    title: "“BUENOS DÍAS EN EL CFP: UN EXALUMNO SALESIANO AGRADECIDO”",
    date: "Julio 2022",
    author: "Patty Castillo",
    description:
      "Julio 2022 (Por: Patty Castillo) Los estudiantes del CFP P. Bartolomé Ambrosio, tuvieron la bendición de recibir a distinguidos exalumnos salesianos, quienes, comentaron su experiencia, al haber estudiado en una casa salesiana, tanto del CFP, como del Liceo Salesiano y del Colegio Don Bosco de Guatemala  sobresaliendo “la gratitud” hacia Dios en Don Bosco, por todo lo recibido, tanto en la formación  cristiana y humana ...",
    image: zoom,
  },
];

const VidaCFP = () => {
  return (
    <>
      <div
        div
        className="w-full  relative pt-2"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center text-5xl flex-col items-center gap-2 font-bold">
          <h1 className="text-white">
            {" "}
            VIDA EN <span className="text-[#eb3502]">CFP</span>
          </h1>
          <FaRegNewspaper className="ml-4 text-white" />
        </div>
      </div>
      <div className="w-full bg-[#eb3502] text-white flex items-center">
        <div className="bg-[#232323] py-2 px-4">
          <span className="font-medium">Lo más Trending</span>
        </div>
        <div className="flex-1 px-4 py-2 overflow-hidden whitespace-nowrap ml-2">
          <span className="font-normal">
            PARTICIPACIÓN DE JÓVENES EN «FESTO 2022»: FESTIVAL SALESIANO DE
            TALENTO ORATORIANO
          </span>
        </div>
        <div className="flex font-bolt">
          <button className="px-2 py-2 hover:bg-[#eb3502] transition-colors border-r border-[#eb3502]">
            <IoIosArrowBack />
          </button>
          <button className="px-2 py-2 hover:bg-[#eb3502] transition-colors">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {news.date} (Por: {news.author})
              </p>
              <p className="text-sm text-gray-700 mb-4">{news.description}</p>
              <button className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors">
                Leer Más
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VidaCFP;
