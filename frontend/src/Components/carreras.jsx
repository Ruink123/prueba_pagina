import { useState, useEffect, useRef,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carreras1 from "../data/archivo";

import * as fa6Icons from "react-icons/fa6";
import * as liaIcons from "react-icons/lia";
import * as piIcons from "react-icons/pi";
import * as giIcons from "react-icons/gi";
import * as slIcons from "react-icons/sl";
import * as biIcons from "react-icons/bi";

const Carreras = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const colores = ["bg-[#ea562b]", "bg-[#4055b2]"];

  const libraries = {
    Fa: fa6Icons,
    Lia: liaIcons,
    Pi: piIcons,
    Gi: giIcons,
    Sl: slIcons,
    Bi: biIcons,
  };

  const words = ["FUTURO", "TRABAJO"];
  const phrase = "capacítate y preparáte para un mejor";

  const timeoutRef = useRef(null);
  const cursorTimeoutRef = useRef(null);

  // Animación para el cursor antes de mostrar las palabras
  useEffect(() => {
    // Iniciar con solo el cursor parpadeando por 1 segundo (reducido de 2s)
    cursorTimeoutRef.current = setTimeout(() => {
      setShowWord(true);
    },110);

    return () => {
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
    };
  }, []);

  // Animación lineal de izquierda a derecha, letra por letra, con el cursor moviéndose
  useEffect(() => {
    if (!showWord) return;

    const handleWordChange = () => {
      const currentWord = words[currentWordIndex];
      let currentIndex = 0;
      
      // Función para mostrar letra por letra
      const showNextLetter = () => {
        if (currentIndex <= currentWord.length) {
          // Mostrar las letras hasta el índice actual
          setDisplayText(currentWord.substring(0, currentIndex));
          currentIndex++;
          
          // Continuar mostrando letras hasta completar la palabra
          if (currentIndex <= currentWord.length) {
            timeoutRef.current = setTimeout(showNextLetter, 50); // Velocidad de aparición de cada letra
          } else {
            // Cuando la palabra está completa, esperar antes de borrarla
            timeoutRef.current = setTimeout(() => {
              // Borrar la palabra letra por letra
              const hideLetters = () => {
                if (currentIndex > 0) {
                  currentIndex--;
                  setDisplayText(currentWord.substring(0, currentIndex));
                  
                  if (currentIndex > 0) {
                    timeoutRef.current = setTimeout(hideLetters, 50); // Velocidad de desaparición de cada letra
                  } else {
                    // Cuando la palabra está completamente borrada, cambiar a la siguiente inmediatamente
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                    // Iniciar la siguiente palabra casi inmediatamente
                    timeoutRef.current = setTimeout(handleWordChange, 100);
                  }
                }
              };
              
              // Reducir el tiempo que se muestra la palabra completa
              timeoutRef.current = setTimeout(hideLetters, 900); // Reducido de 8000ms a 2000ms
            }, 200); // Reducido de 500ms a 300ms
          }
        }
      };
      
      // Iniciar la animación letra por letra
      showNextLetter();
    };

    // Iniciar la animación de palabras
    timeoutRef.current = setTimeout(handleWordChange, 50); // Reducido de 500ms a 300ms

    // Limpieza al desmontar componente
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentWordIndex, showWord]);

  return (
    <>
      <section className="h-auto w-full pt-5 px-2 sm:px-4 md:px-6">
      {/* Header con título principal y animación */}
        <div className="w-full flex flex-col items-center mb-10 relative">
          {/* animaciones */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-8 px-2  ">
            <div className="flex flex-col sm:flex-row justify-center items-center font-semibold">
              <div className="flex items-center  flex-col lg:flex lg:flex-row">
                <p className="capitalize text-4xl font-bold">
                  {phrase}
                </p>
                <div className="h-10 sm:h-12 md:h-14">
                  <p className="text-[#ea562b] font-bold whitespace-nowrap pl-3  ">
                    {displayText}
                    <span
                      className="animate-blink inline-block text-black font-bold"
                      style={{ position: "relative", marginLeft: "0px" }}
                    >
                      |
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center text-black font-bold">
            Deseas Estudiar en el CFP
          </div>

          {/* Texto de fondo */}
          <p className="hidden sm:block absolute text-center top-[80%] -translate-x-2 -translate-y-5 text-lg sm:text-xl md:text-2xl lg:text-[3rem] font-extrabold text-gray-300 opacity-50">
            FUNDACIÓN ALBERTO MARVELLI
          </p>

          <h2 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center relative z-10 px-4 ">
            <span className="font-bold">
              Cursos prácticos certificados por DIGEEX
            </span>
          </h2>
        </div>

        {/* Contenedor principal de tarjetas */}
        <div className="w-full h-auto px-2 sm:px-4 md:px-6 mb-10 flex justify-center items-center flex-col gap-4 md:gap-5 pt-5  md:flex-col lg:w-[100%]  md:justify-center md:items-center md:w-full  ">
          {/*mapeo de las carreras*/}

          <div className="w-full flex flex-col md:flex-row justify-center gap-4   lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-4 lg:w-full lg:h-auto md:grid md:grid-cols-2 md:grid-rows-6 md:gap-4">
            {Carreras1.map((carrera, index) => {
              const prefix = carrera.icon.substring(0, 2);
              const IconPack = libraries[prefix];
              const IconComponent = IconPack?.[carrera.icon];
              let colorClass = colores[0];
              if (index == 3 || index == 4 || index == 11) {
                colorClass = colores[1];
              } else {
                colorClass = colores[0];
              }

              
              return (
                <div 
                  className="w-full sm:w-[calc(50%-0.375rem)] lg:w-full h-68 group perspective md:w-full cursor-pointer"
                  onClick={() => navigate(`/carrera/${carrera.id}`)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180 ${colorClass}`}
                  >
                    {/* Cara frontal */}
                    <div className="w-full h-full flex justify-center absolute items-center backface-hidden ">
                      <div className="w-full h-full  flex justify-center relative">
                        <div key={carrera.id}>
                          <img
                            src={carrera.imagen1}
                            className="w-full h-full object-cover fixed"
                          ></img>
                        </div>
                        <div
                          className={`absolute inset-0 opacity-60 ${
                            carrera.imagen1 == null ? "" : "bg-neutral-900"
                          }`}
                        ></div>
                        <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                          <div className="w-45 text-white flex justify-center items-center flex-col">
                            <h3 className="texto1 font-bold text-center lg:text-base sm:text-xl text-white uppercase pt-3 ">
                              <div
                                key={carrera.id}
                                className="flex flex-col items-center gap-4"
                              >
                                {IconComponent ? (
                                  <IconComponent className="text-6xl sm:text-5xl text-center  " />
                                ) : (
                                  <img
                                    src={carrera.icon}
                                    className="flex justify-center w-18 h-24  sm:w-12 sm:h-12 invert lg:w-full lg:h-15  "
                                  />
                                )}
                                <p className="w-auto h-full text-white">
                                  {carrera.title}
                                </p>
                              </div>
                            </h3>
                          </div>
                          <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                            <div key={carrera.id}>
                              <p className="w-auto h-full text-white">
                                {carrera.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cara Trasera */}

                    <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                      <div className="w-full h-full flex justify-center relative">
                        <div key={carrera.id}>
                          <img
                            src={carrera.imagen2}
                            className="w-full h-full object-cover absolute"
                          ></img>
                        </div>
                        <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                          <Link 
                            to={`/carrera/${carrera.id}`}
                            className="bg-[#ee9b00] text-white px-3 py-1 rounded text-sm text-center uppercase font-semibold transition-colors cursor-pointer border-white border-2 hover:bg-[#d68a00]"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/carrera/${carrera.id}`);
                            }}
                          >
                            ver más <br /> información
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
                  
          {/* Banner de inscripción */}
          <div className="w-full sm:w-full lg:w-full lg:h-56 h-auto sm:h-68 bg-[#f3af0c]  ">
            <div className="p-4 md:p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="texto1 text-2xl md:text-3xl text-left text-white font-bold">
                  Mejora tus Oportunidades | Inscribete Hoy
                </h2>

                <p className="mt-3 text-sm md:text-base">
                  No pierdas la oportunidad de aprender o mejorar tus
                  conocimientos. Obtén tu Diplomado. Te abrirás nuevas
                  oportunidades de Trabajo o de Emprendimiento! Chicos y Chicas
                  son bienvenidos a nuestras carreras. Pregunta por nuestro
                  Programa de Becas
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
      </section>
    </>
  );
};

export default Carreras;