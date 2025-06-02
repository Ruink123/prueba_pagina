import { useNavigate } from "react-router-dom";
import fondo from "../assets/vidaCfp/fondoe.jpg";
import foto1 from "../assets/vidaCfp/BUENOS-DIAS-EN-EL-CFP-UN-EXALUMNO-SALESIANO-1.jpg";
import foto2 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO-3.jpg";
import foto3 from "../assets/vidaCfp/BUENOS-DIAS-EN-EL-CFP-UN-EXALUMNO-SALESIANO-3.jpg";
import foto4 from "../assets/vidaCfp/BUENOS-DIAS-EN-EL-CFP-UN-EXALUMNO-SALESIANO-4.jpg";
import foto5 from "../assets/vidaCfp/BUENOS-DIAS-EN-EL-CFP-UN-EXALUMNO-SALESIANO-5.jpg";

const NoticiaZoom = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center gap-4 py-10"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-5xl   mx-auto mt-14 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 w-full ">
          “BUENOS DÍAS EN EL CFP: UN EXALUMNO SALESIANO AGRADECIDO”
        </h1>
        <p className="italic text-lg text-center mb-6 font-semibold">
          Junio 2022 (Por: Miguel López)
        </p>
        <p className="mb-4 text-justify">
          Los estudiantes del CFP P. Bartolomé Ambrosio, tuvieron la bendición
          de recibir a distinguidos exalumnos salesianos, quienes, comentaron su
          experiencia, al haber estudiado en una casa salesiana, tanto del CFP,
          como del Liceo Salesiano y del Colegio Don Bosco de Guatemala,
          sobresaliendo “la gratitud” hacia Dios en Don Bosco, por todo lo
          recibido, tanto en la formación cristiana y humana, como el contribuir
          a que sean personas de bien en la sociedad.
        </p>
        <p className="mb-4 text-justify">
          Destacando, que un verdadero exalumno salesiano, es aquel que, en todo
          momento o circunstancia, resalta múltiples cualidades, especialmente
          la alegría, la espiritualidad, el liderazgo positivo, la creatividad,
          el dinamismo, ante todo ser una persona íntegra y de confianza,
          generando hermandad, amistad y familiaridad con los que se relaciona.
        </p>

        <p>
          Los exalumnos motivaron y a la vez invitaron a los estudiantes, para
          que sean agentes de cambio en la sociedad, dando un buen ejemplo y
          testimonio positivo de vida para los demás, haciendo todo muy bien,
          como lo decía San Juan Bosco: “la perfección se alcanza en hacer lo
          que te corresponde, lo mejor posible”.
        </p>
        <p>
          Viviendo al máximo este mes del exalumno, tan distintivo en todas
          casas salesianas, elevando nuevamente al cielo, el Himno Salesiano:
          siguiendo las huellas que el astro, dejó…
        </p>

        <div className="grid grid-cols-3 gap-2 my-6">
          <img src={foto1} alt="Celebración 1" className="object-cover w-full h-40 rounded" />
          <img src={foto2} alt="Celebración 2" className="object-cover w-full h-40 rounded" />
          <img src={foto3} alt="Celebración 3" className="object-cover w-full h-40 rounded" />
          <img src={foto4} alt="Celebración 4" className="object-cover w-full h-40 rounded col-span-2" />
          <img src={foto5} alt="Celebración 5" className="object-cover w-full h-40 rounded" />
        </div>

        
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => navigate("/vidacfp")}
            class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group "
          >
            <div class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
              <div class="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
            </div>
            <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
            <div class="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
            <div class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
            <div class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
            <div class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
            <div class="relative flex items-center justify-center gap-2">
              <span class="text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
                Volver a VidaCFP
              </span>
            </div>
            <div class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticiaZoom;
