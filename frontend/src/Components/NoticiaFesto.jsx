import fondo from "../assets/vidaCfp/fondoe.jpg";
import foto1 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import foto2 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import foto3 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import foto4 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import foto5 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import foto6 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import foto7 from "../assets/vidaCfp/FESTO-AGOSTO-2.jpg";
import { useNavigate } from "react-router-dom";

const NoticiaFesto = () => {
      const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center gap-4 py-10"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-3xl   mx-auto mt-14 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          PARTICIPACIÓN DE JÓVENES EN «FESTO 2022»: FESTIVAL SALESIANO DE
          TALENTO ORATORIANO
        </h1>
        <p className="italic text-lg text-center mb-6 font-semibold">
          Agosto 2022 (Por: Miguel López)
        </p>
        <p className="mb-4 text-justify">
          El domingo 14 de agosto de 2022, en el Gimnasio P. Hugo Santucci del
          Colegio Salesiano Don Bosco de Guatemala, se llevó a cabo el Festival
          Salesiano de Talento Oratoriano, FESTO, reuniendo a todos los
          oratorios a nivel Capital de Guatemala, buscando crear un momento
          ameno, donde los jóvenes y jovencitas demostraron sus diferentes
          talentos en las varias categorías que se llevaron a cabo.
        </p>
        <p className="mb-4 text-justify">
          Los estudiantes del CFP P. Bartolomé Ambrosio de la zona 8, tuvieron a
          bien participar y presentar varios puntos artísticos, entre ellos:
          canto individual y dúo, grupo musical, dibujo a mano alzada, dibujo en
          claro oscuro, instrumentos musicales, entre otros, logrando obtener
          varios premios en sus participaciones, elevando aún más la alegría de
          los jóvenes, quienes se prepararon mucho para alcanzar estos logros.
        </p>
        <p className="text-justify">
          Esta actividad permite tener un encuentro juvenil más cercano entre
          las diferentes casas salesianas de Guatemala, realzando los
          innumerables talentos que se llevan dentro de los hijos de Don Bosco.
        </p>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div>
            <img
              src={foto1}
              alt="Celebración 1"
              className="object-cover w-full h-48 aspect-square rounded "
            />
          </div>
          <div className="col-span-3 col-start-1 row-start-3">
            <img
              src={foto2}
              alt="Celebración 2"
              className="object-cover w-full h-48 aspect-square rounded col-start-3 row-start-1"
            />
          </div>
          <div className="col-start-2 row-start-1">
            <img
              src={foto3}
              alt="Celebración 3"
              className="object-cover w-full h-48 aspect-square rounded col-start-2 row-start-1"
            />
          </div>
          <div className="col-start-3 row-start-1">
            <img
              src={foto4}
              alt="Celebración 4"
              className="object-cover w-full h-48 aspect-square rounded col-start-3 row-start-2"
            />
          </div>
          <div className="col-start-1 row-start-2">
            <img
              src={foto5}
              alt="Celebración 5"
              className="object-cover w-full h-48 aspect-square rounded col-start-1 row-start-2"
            />
          </div>
          <div className="col-start-2 row-start-2">
            <img
              src={foto6}
              alt="Celebración 6"
              className="object-cover w-full h-48 aspect-square rounded col-start-2 row-start-2"
            />
          </div>
          <div className="col-start-3 row-start-2">
            <img
              src={foto7}
              alt="Celebración 7"
              className="object-cover w-full h-48 aspect-square rounded col-start-3 row-start-2"
            />
          </div>
        </div>
        <div className="flex justify-center text-4xl font-bold ">
        <h1>Feliz cumpleaños 207 para Don Bosco!!!</h1>
        </div>
        <div className="flex items-center justify-center mt-6">
        <button  onClick={() => navigate("/vidacfp")} class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group ">
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

export default NoticiaFesto;
