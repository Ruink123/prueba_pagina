import React from "react";
import imagen from "../assets/Nosotros/imagen-nosotros.jpg";
import fondo from "../assets/Nosotros/fondo1.jpg";

const Nosotros = () => {
  return (
    <>
      <div className="w-full">
        <img
          src={imagen}
          alt="Nosotros"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "420px" }}
        />
      </div>

      <div
        className="relative flex flex-col items-center justify-center py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {/* Texto de fondo grande y translúcido */}
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[2.5rem] md:text-[4rem] font-bold text-white opacity-10 tracking-wider whitespace-nowrap">
            FUNDACIÓN ALBERTO MARVELLI
          </span>
        </span>
        {/* Subtítulo */}
        <span className="relative text-white text-lg mb-2 font-bolt">
          Acerca de la Fundación
        </span>
        {/* Título principal */}
        <h1 className="relative text-3xl md:text-5xl font-extrabold text-white text-center">
          ¿QUIÉNES SOMOS?
        </h1>
      </div>
    </>
  );
};

export default Nosotros;
