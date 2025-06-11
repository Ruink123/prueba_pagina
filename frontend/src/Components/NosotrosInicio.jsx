import React, { useState } from "react";
import imagen from "../assets/Nosotros/imagen-nosotros.jpg";
import fondo from "../assets/Nosotros/fondo1.jpg";
// import Header from "./Header";
import { FaMeteor } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const tabs = [
  {
    title: "Nuestra Obra",
    content: (
      <>
        <p>
         Don Bosco fundó escuelas (matutinas, vespertinas y nocturnas), colegios e internados, pero, muy particularmente, obras técnicas con las cuales los salesianos de Don Bosco se han dado a conocer en más de 130 países.


        </p>
        <p className="mt-2">
          El Centro de Formación Profesional Padre Bartolomé Ambrosio fue fundado en el año 1979, ubicado en la 39 Calle “B” 6-69 zona 8 de la Ciudad Capital de Guatemala.


        </p>
        <p className="mt-2">
         La educación ofrecida por el CFP no es únicamente en el área técnica sino integral, por lo que se ofrece cuidado en las áreas de la salud, como dermatología, oftalmología, psicología y medicina general.


        </p>
          </>
    ),
  },
  {
    title: "¿Acerca de Nosotros",
    content: (
      <>
        <p>
         Somos una Comunidad Educativa Salesiana, integrada por laicos y salesianos de Don Bosco que formamos y educamos para el trabajo a los jóvenes de Guatemala, nuestros referentes preferenciales, con los principios pedagógicos de Don Bosco, utilizando la instrucción basada en competencias, emprendimiento y habilidades para la vida con el fin de incidir positivamente en la realidad del país.
        </p>
        
      </>
    ),
  },
  {
    title: "Nuestra Vision",
    content: (
      <>
        <p>
         Seremos una institución líder en la educación técnico-profesional integral basada en el Sistema Preventivo Salesiano.


        </p>
        <br />
        <p>
          Favorecemos el trabajo de equipo, la calificación del personal en competencia y profesionalidad, optimizaremos los recursos buscando la autosostenibilidad desarrollando una amplia y flexible propuesta de servicios educativos con calidad académica y excelente posicionamiento en el mercado nacional…


        </p>
       
      </>
    ),
  },
];

const NosotrosInicio = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Sección de imagen principal - responsive en altura */}
      

      {/* Sección con fondo de imagen - responsive en padding y tamaño de fuente */}
      <div
        className="relative flex flex-col items-center justify-center py-6 md:py-8 lg:py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {/* Texto de fondo grande y translúcido - responsive */}
        <span
          className="absolute left-0 right-0 top-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            height: "120px", // Más pequeño en móvil
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <span
            className="font-extrabold tracking-wider uppercase text-center w-full"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.2rem)", // Tamaño responsive con clamp
              color: "#fff",
              opacity: 0.1,
              letterSpacing: "0.08em",
              lineHeight: 1.1,
              textShadow: "0 1px 4px #000",
            }}
          >
            FUNDACIÓN ALBERTO MARVELLI
          </span>
        </span>
        {/* Subtítulo */}
        <span className="relative text-white text-base md:text-lg mb-2 font-bolt z-10 px-4 text-center">
          Acerca de la Fundación
        </span>
        {/* Título principal - responsive */}
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-4 md:mb-8 z-10 px-4">
          ¿QUIÉNES SOMOS?
        </h1>
        
        {/* Contenedor centrado para tabs y contenido - responsive en ancho y padding */}
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          {/* Tabs - responsive con scroll horizontal en móvil */}
          <div className="flex relative justify-start md:justify-center overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {tabs.map((tab, idx) => (
              <div key={tab.title} className="relative flex-shrink-0">
                <button
                  className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold focus:outline-none rounded-t-sm whitespace-nowrap ${
                    activeTab === idx
                      ? "bg-[#eb572a] text-white "
                      : "text-white hover:bg-[#f2ad0c]"
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.title}
                </button>
                {activeTab === idx && (
                  <span
                    className="absolute left-1/2 -bottom-3 transform -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "12px solid transparent",
                      borderRight: "12px solid transparent",
                      borderTop: "12px solid #e53e3e",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Contenido de pestaña - responsive en padding y tamaño de texto */}
          <div className="bg-white  bg-opacity-95 rounded-b text-shadow-2xs p-4 md:p-6 shadow text-gray-900 text-sm md:text-base leading-relaxed rounded-sm overflow-y-auto max-h-[60vh] md:max-h-none">
            {tabs[activeTab].content}
          </div>
        </div>
        <div className="w-full pt-6">
        <img
          src={imagen}
          alt="Nosotros"
          className="w-full h-48 md:h-72 lg:h-[420px] object-cover"
          style={{ maxHeight: "420px" }}
        />
      </div>
      </div>
      
    

      {/* Estilos adicionales para ocultar la barra de desplazamiento pero mantener la funcionalidad */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
    </>
  );
};

export default NosotrosInicio;
