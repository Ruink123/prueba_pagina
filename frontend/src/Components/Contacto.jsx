import banner from "../assets/Contacto/Banner-Fondo-de-Becas.jpg";
import fondo from "../assets/Contacto/fondo1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contacto = () => {
  return (
    <div>
      <div className="w-full flex justify-center my-4">
        <img
          src={banner}
          alt="Banner Fondo de Becas"
          className="w-full max-w-6xl rounded-lg object-cover"
          style={{ minHeight: 120 }}
        />
      </div>
      <div
        className="relative flex flex-col items-center justify-center w-full"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "220px",
        }}
      >
        {/* Texto de fondo muy tenue */}
        <span
          className=" absolute pt-8 left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)", // Más grande que antes
            color: "#fff",
            opacity: 0.08,
            fontWeight: 800,
            letterSpacing: "0.08em",
            zIndex: 0,
            textShadow: "0 1px 4px #000",
            textAlign: "center",
            width: "100%",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          FUNDACIÓN ALBERTO MARVELLI
        </span>
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center py-10 w-full">
          <span className="text-white text-lg md:text-xl mb-2 font-normal text-center">
            ¿Deseas más información?
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center">
            Contáctanos
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch max-w-6xl mx-auto my-10 gap-0 md:gap-0 rounded-lg overflow-hidden shadow-lg">
        {/* Formulario */}
        <div className="bg-[#4a5a6a] bg-opacity-80 flex-1 p-8">
          <h2 className="text-white text-xl font-bold mb-6">
            ENVÍANOS UN MENSAJE
          </h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-white  text-sm font-medium mb-1 block">
                  Tu Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nombre (*)"
                  className="w-full px-3 py-2 rounded border bg-white border-gray-300 focus:outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-white text-sm font-medium mb-1 block">
                  Necesitas información de{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-3 py-2 rounded border bg-white border-gray-300 focus:outline-none"
                  required
                  defaultValue="Información General"
                >
                  <option>Información General</option>
                  <option>Inscripción</option>
                  <option>Cursos</option>
                  <option>Donaciones</option>
                  <option>Quiero aplicar a una beca</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Correo Electrónico (*)"
                  className="w-full px-3 py-2 rounded border bg-white border-gray-300 focus:outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Teléfono (*)"
                  className="w-full px-3 py-2 rounded border bg-white border-gray-300 focus:outline-none"
                  required
                />
              </div>
            </div>
            <textarea
              placeholder="Mensaje"
              className="w-full px-3 py-2 rounded border bg-white border-gray-300 focus:outline-none min-h-[80px]"
              rows={4}
            />
            <button
              type="submit"
              className="bg-[#f15a29] text-white  font-bold py-2 rounded mt-2 hover:bg-[#d94e1f] transition"
            >
              ENVIAR
            </button>
          </form>
        </div>
        {/* Información de contacto */}
        <div className="bg-[#e2e8f0] flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-black text-xl font-bold mb-6">
            INFORMACIÓN DE CONTACTO
          </h2>
          <ul className="text-black text-base space-y-4">
            <li className="flex items-center gap-2">
              <FaLocationDot />
              39 Calle “B” 6-69 zona 8
            </li>
            <li className="flex items-center gap-2">
              <IoCall />
              +502 2209-9999
            </li>
            <li className="flex items-center gap-2">
              <MdEmail />
              info@fundacionalbertomarvelli.org
            </li>
            <li className="flex items-center gap-2">
              <FaFacebookF />
              <a
                href="https://www.facebook.com/CFP.AMBROSIO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook.com/CFP.AMBROSIO
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram />
              <a href="https://www.Instagram.com/cfpbartolomeambrosio">
                Instagram.com/cfpbartolomeambrosio{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://embed.waze.com/iframe?zoom=17&lat=14.6114&lon=-90.52959&pin=1"
          width="1250"
          height="450"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
