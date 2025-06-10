import fondo from "../assets/vidaCfp/fondoe.jpg";
import foto1 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO.jpg";
import foto2 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO-2.jpg";
import foto3 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO-3.jpg";
import foto4 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO-4.jpg";
import foto5 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO-5.jpg";
import foto6 from "../assets/vidaCfp/207-CUMPLE-DE-DON-BOSCO-AGOSTO-6.jpg";
import { useNavigate } from "react-router-dom";

const NoticiaCumpleBosco = () => {
    const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center gap-4 py-5"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-3xl   mx-auto mt-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          207 CUMPLEAÑOS DE SAN JUAN BOSCO
        </h1>
        <p className="italic text-lg text-center mb-6 font-semibold">
          Agosto 2022 (Por: Miguel López)
        </p>
        <p className="mb-4 text-justify">
          El pasado martes 16 de agosto de 2022, se celebró a lo grande el 207
          cumpleaños de San Juan Bosco, un gran padre, maestro y amigo para los
          jóvenes, especialmente para los estudiantes del CFP P. Bartolomé
          Ambrosio de la zona 8 de Guatemala.
        </p>
        <p className="mb-4 text-justify">
          Se inició la celebración cantando a todo pulmón las mañanitas, con el
          grupo musical de la Academia de Música del CFP, brindándole aplausos
          que, junto con las voces de los jóvenes, han llegado hasta el cielo, y
          seguramente han puesto una sonrisa en el rostro de Don Bosco!
        </p>
        <p className="text-justify">
          Luego se llevó a cabo la Santa Eucaristía, presidida por el Sacerdote
          Salesiano P. José Anael Pascual, quien recientemente se ha incorporado
          a la comunidad salesiana de la Parroquia La Divina Providencia. Al
          finalizar la Eucaristía, el P. Pascual impuso sobre las cabezas de los
          presentes, la reliquia de primer grado de Don Bosco, recibiendo así la
          bendición del Santo de la Alegría.
        </p>

        {/* Collage de fotos */}
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-2 mb-2">
            <img
              src={foto1}
              alt="Celebración 1"
              className="object-cover w-full h-40 rounded"
            />
            <img
              src={foto2}
              alt="Celebración 2"
              className="object-cover w-full h-40 rounded"
            />
            <img
              src={foto3}
              alt="Celebración 3"
              className="object-cover w-full h-40 rounded"
            />
          </div>
          <div>
            <img
              src={foto4}
              alt="Celebración 4"
              className="object-cover w-full h-48 rounded"
            />
          </div>
        </div>
        <p>
          Durante toda la jornada se llevaron a cabo varios encuentros
          juveniles, tanto de canto como deportivos, para mantener viva la
          alegría que caracteriza esta casa salesiana.
        </p>

        <div className="mt-8">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <img
              src={foto5}
              alt="Celebración 1"
              className="object-cover w-full h-40 rounded"
            />
            <img
              src={foto6}
              alt="Celebración 2"
              className="object-cover w-full h-40 rounded"
            />
          </div>
        </div>
        <br />
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

export default NoticiaCumpleBosco;
