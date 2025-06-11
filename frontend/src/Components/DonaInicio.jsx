import fondo from "../assets/Donar/victor-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import fondo2 from "../assets/Donar/puntos-fondo.png";
import Maquina from "./Maquina";
const DonaInicio = () => {
  const navigate = useNavigate();
  return (
    <section
      className="bg-[#f47d20] text-white px-4 sm:px-6 lg:px-8 py-12 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${fondo2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" ">
        <Maquina text="Dona Hoy  " />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Texto y botón */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            Tu donativo refuerza el{" "}
            <strong className="font-bold">Fondo de Becas</strong>
            <br />
            para que más jóvenes puedan estudiar
            <br />
            un Diplomado que les permita trabajar y
            <br />
            mejorar su futuro.
          </p>
          <button
            onClick={() => navigate("/dona-hoy/")}
            className="mt-6 bg-[#3543c3] hover:bg-[#2e38a1] text-white px-6 py-3 rounded font-medium shadow-md transition duration-300"
          >
            ¡Quiero Ayudar a los Jóvenes! 😊
          </button>
        </div>

        {/* Imagen */}
          <img  
            src={fondo}
            alt="Jóvenes beneficiados"
            className="max-h-72 sm:max-h-80 md:max-h-96 object-contain translate-y-6 lg:translate-y-12"
          />
        </div>
    </section>
  );
};





export default DonaInicio;
