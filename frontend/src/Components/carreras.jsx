import { FaComputer } from "react-icons/fa6";
import { PiPlugChargingBold } from "react-icons/pi";
import { GiDrill } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BiSolidUserRectangle } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";

const Carreras = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState(0);

  const words = ["FUTURO", "TRABAJO"];

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleReveal = () => {
      const currentWord = words[currentWordIndex];

      if (phase === 0) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timeoutRef.current = setTimeout(handleReveal, 80);
        } else {
          setPhase(1);
          timeoutRef.current = setTimeout(handleReveal, 2000);
        }
      } else if (phase === 1) {
        setPhase(2);
        setDisplayText("");
        setCurrentWordIndex((currentWordIndex + 1) % words.length);

        setPhase(0);
        timeoutRef.current = setTimeout(handleReveal, 500);
      }
    };

    // Iniciar la animación
    timeoutRef.current = setTimeout(handleReveal, 200);

    // Limpieza al desmontar componente
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentWordIndex, phase]);

  return (
    <>
      <section className="h-auto w-full pt-5 px-2 sm:px-4 md:px-6">
        {/* Header con título principal y animación */}
        <div className="w-full flex flex-col items-center mb-10 relative">
          {/* animaciones */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-8 px-2">
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 font-semibold ">
              <p className="capitalize text-4xl font-bold">
                capacítate y preparáte para un mejor
              </p>
              <div className="flex items-center h-10 sm:h-12 md:h-14">
                <p className="text-[#ea562b] relative min-w-[100px] sm:min-w-[120px] md:min-w-[150px] font-bold ">
                  {displayText}
                  <span
                    className="animate-blink ml-[-2px] inline-block text-black font-bold"
                    style={{ position: "relative" }}
                  >
                    |
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center text-black font-bold">
            Deseas Estudiar en el CFP
          </div>

          {/* Texto de fondo */}
          <p className="hidden sm:block absolute text-center top-[80%] -translate-x-2 -translate-y-5 text-lg sm:text-xl md:text-2xl lg:text-[3rem] font-extrabold text-gray-300 opacity-50 pointer-events-none ">
            FUNDACIÓN ALBERTO MARVELLI
          </p>

          <h2 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center relative z-10 px-4">
            <span className="font-bold">
              Cursos prácticos certificados por DIGEEX
            </span>
          </h2>
        </div>

        {/* Contenedor principal de tarjetas */}
        <div className="w-full h-auto px-2 sm:px-4 md:px-6 mb-10 flex justify-center items-center flex-col gap-4 md:gap-5 pt-5 lg:flex md:flex-col lg:w-[100%]  md:justify-center md:items-center md:w-full  ">
          {/* Primera fila de cartas - Convertido a flexbox */}
          <div className="w-full flex flex-col md:flex-row justify-center gap-3 md:gap-4">
            {/* Primera carta flip - Operador y reparador de computadoras */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                {/* Cara frontal */}
                <div className="w-full h-full flex justify-center absolute items-center backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0615-scaled.jpg))] bg-cover flex justify-center relative">
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <FaComputer className="text-4xl sm:text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                          operador y reparador de computadoras
                        </h3>
                      </div>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0623-scaled.jpg)] bg-cover flex justify-center relative">
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <button className="bg-[#4055b2] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors cursor-pointer border-white border-2">
                        ver más <br /> información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda carta flip - Redes Cisco (con rotación vertical) */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-x-180">
                {/* Cara frontal */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <div className="w-full h-full bg-[#ea562b] flex justify-center relative">
                    <div className="w-full flex justify-center items-center h-full text-white flex-col">
                      <LiaNetworkWiredSolid className="text-4xl sm:text-5xl" />
                      <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                        redes cisco computación
                      </h3>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="w-full h-full flex justify-center items-center absolute rotate-x-180 backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/24-scaled.jpg)] flex justify-center relative bg-cover">
                    {/* Contenido de la cara trasera */}
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="text-white w-4/5">
                        <div className="mt-4 text-center">
                          <button className="bg-[#ea562b] text-white px-3 py-1 rounded text-sm uppercase font-semibold border-2 border-white transition-colors cursor-pointer">
                            ver más <br /> información
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tercera carta - Electricidad */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                {/* Cara frontal */}
                <div className="w-full h-full flex justify-center absolute items-center backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0470-scaled.jpg)] bg-cover flex justify-center relative">
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <PiPlugChargingBold className="text-4xl sm:text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                          electricidad industrial y domiciliar
                        </h3>
                      </div>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold ">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0452-scaled.jpg)] bg-cover flex justify-center relative">
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <button className="bg-[#4055b2] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors cursor-pointer border-white border-2">
                        ver más <br /> información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cuarta carta - Soldadura */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-x-180">
                <div className="w-full h-full bg-[#4055b2] flex justify-center items-center absolute backface-hidden">
                  <div className="w-full flex justify-center items-center h-full text-white flex-col">
                    <img
                      src="/welding-mask_4610697.svg"
                      className="flex justify-center w-10 h-10 sm:w-12 sm:h-12 invert"
                    />
                    <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3 flex flex-col sm:flex-row">
                      <span>soldadura</span> <span>industrial</span>
                    </h3>
                    <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                      carrera técnica
                    </div>
                  </div>
                </div>

                {/* carta trasera */}
                <div className="w-full h-full flex justify-center items-center absolute rotate-x-180 backface-hidden bg-cover bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0367-scaled.jpg)]">
                  <button className="bg-amber-400 text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors border-white border-2 cursor-pointer">
                    ver más <br /> información
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Segunda fila de cartas - Convertido a flexbox */}
          <div className="w-full flex md:flex-row flex-col justify-center gap-3 md:gap-4">
            {/* estructuras metalicas */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-x-180">
                <div className="w-full h-full bg-[#4055b2] flex justify-center items-center absolute backface-hidden">
                  <div className="w-full flex justify-center items-center h-full text-white flex-col">
                    <img
                      src="/steel-beam_10393322.svg"
                      className="flex justify-center w-10 h-10 sm:w-12 sm:h-12 invert"
                    />
                    <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3 flex flex-col sm:flex-row">
                      <p>estructuras metálicas livianas</p> 
                    </h3>
                    <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                      carrera técnica
                    </div>
                  </div>
                </div>

                {/* carta trasera */}
                <div className="w-full h-full flex justify-center items-center absolute rotate-x-180 backface-hidden bg-cover bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/estructuras1.png)] bg-center">
                  <button className="bg-amber-400 text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors border-white border-2 cursor-pointer">
                    ver más <br /> información
                  </button>
                </div>
              </div>
            </div>

            {/* carpinteria */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                {/* Cara frontal */}
                <div className="w-full h-full flex justify-center items-center absolute backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/14-scaled.jpg)] bg-cover flex justify-center relative">
                    {/* Capa semitransparente */}
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>

                    {/* Contenido de texto (sin opacidad) */}
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <GiDrill className="text-4xl sm:text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                          carpintería
                        </h3>
                      </div>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="w-full h-full flex justify-center items-center absolute rotate-y-180 backface-hidden bg-cover bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0493-scaled.jpg)]">
                  <button className="bg-[#4055b2] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors cursor-pointer border-white border-2">
                    ver más <br /> información
                  </button>
                </div>
              </div>
            </div>

            {/* torno */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-x-180">
                <div className="w-full h-full bg-[#ea562b] flex justify-center items-center absolute backface-hidden">
                  <div className="w-full flex justify-center items-center h-full text-white flex-col">
                    <img
                      src="/lathe-machine_9472048.svg"
                      className="flex justify-center w-10 h-10 sm:w-12 sm:h-12 invert"
                    />
                    <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                      MECANICA DE TORNO Y FRESADORA
                    </h3>
                    <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                      carrera técnica
                    </div>
                  </div>
                </div>

                {/* carta trasera */}
                <div className="w-full h-full flex justify-center items-center absolute rotate-x-180 backface-hidden bg-cover bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/torno3.png)] bg-center">
                  <button className="bg-[#ea562b] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors border-white border-2 cursor-pointer">
                    ver más <br /> información
                  </button>
                </div>
              </div>
            </div>

            {/*  motos */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.75rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                {/* Cara frontal */}
                <div className="w-full h-full flex justify-center absolute items-center backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2023/01/mecanica-motocicletas-scaled.jpg))] bg-cover flex justify-center relative">
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <FaMotorcycle className="text-4xl sm:text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                          mecánica de motocicletas
                        </h3>
                      </div>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2023/01/mecanica-motocicletas-1-scaled.jpg)] bg-cover flex justify-center relative">
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <button className="bg-[#4055b2] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors cursor-pointer border-white border-2">
                        ver más <br /> información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tercera fila - Música, inglés y banner - Convertido a flexbox */}
          <div className="w-full flex flex-col justify-center gap-3 md:gap-4 md:flex-row">
            {/* Academia de música */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.667rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                {/* Cara frontal */}
                <div className="w-full h-full flex justify-center absolute items-center backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/25-scaled.jpg))] bg-cover flex justify-center relative">
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <SlEarphones className="text-4xl sm:text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                          academia de música
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/28-scaled.jpg)] bg-cover flex justify-center relative">
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <button className="bg-[#4055b2] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors cursor-pointer border-white border-2">
                        ver más <br /> información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academia de inglés */}
            <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.667rem)] h-68 group perspective">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-x-180">
                <div className="w-full h-full bg-[#ea562b] flex justify-center items-center absolute backface-hidden">
                  <div className="w-full flex justify-center items-center h-full text-white flex-col">
                    <BiSolidUserRectangle className="flex justify-center text-4xl sm:text-5xl" />
                    <h3 className="texto1 font-bold text-center text-base sm:text-xl text-white uppercase pt-3">
                      academia de inglés
                    </h3>
                  </div>
                </div>

                {/* carta trasera */}
                <div className="w-full h-full flex justify-center items-center absolute rotate-x-180 backface-hidden bg-cover bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/ingles1.png)]">
                  <button className="bg-[#ea562b]  text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors border-white border-2 cursor-pointer">
                    ver más <br /> información
                  </button>
                </div>
              </div>
            </div>

            {/* Banner informativo */}
            <div className="w-full sm:w-full lg:w-[67%] lg:h-68 h-auto sm:h-68 bg-[#f3af0c]  ">
              <div className="p-4 md:p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="texto1 text-2xl md:text-3xl text-left text-white font-bold">
                    Mejora tus Oportunidades | Inscribete Hoy
                  </h2>

                  <p className="mt-3 text-sm md:text-base">
                    No pierdas la oportunidad de aprender o mejorar tus
                    conocimientos. Obtén tu Diplomado. Te abrirás nuevas
                    oportunidades de Trabajo o de Emprendimiento! Chicos y
                    Chicas son bienvenidos a nuestras carreras. Pregunta por
                    nuestro Programa de Becas
                  </p>
                </div>

                <div className="mt-4 ">
                  <button className="bg-[#ea562b] w-full sm:w-auto px-4 py-2 hover:bg-[#3f51b5] transition duration-300 ">
                    <a
                      href="https://fundacionalbertomarvelli.org/inscripciones/"
                      className="text-white font-medium"
                    >
                      Más información
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carreras;
