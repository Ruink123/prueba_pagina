import { FaSchool } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [contador1970, setContador1970] = useState(0);
  const [contador300, setContador300] = useState(0);
  const [contador12, setContador12] = useState(0);
  const [yaSeEjecuto, setYaSeEjecuto] = useState(false);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Solo crear el observer si no se ha ejecutado la animación
    if (yaSeEjecuto) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !yaSeEjecuto) {
            // Marcar como ejecutado inmediatamente para evitar múltiples ejecuciones
            setYaSeEjecuto(true);
            
            // Desconectar el observer ya que no lo necesitamos más
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
            
            // Ejecutar la animación
            ejecutarAnimacion();
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current && observerRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [yaSeEjecuto]);

  const ejecutarAnimacion = () => {
    let paso = 0;
    const totalPasos = 80;
    const duracion = 2000; // 2 segundos
    const intervalo = duracion / totalPasos;
    
    const timer = setInterval(() => {
      paso++;
      const progreso = paso / totalPasos;
      
      // Calcular valores actuales
      const valor1970 = Math.floor(1970 * progreso);
      const valor300 = Math.floor(300 * progreso);
      const valor12 = Math.floor(12 * progreso);
      
      // Actualizar estados
      setContador1970(valor1970);
      setContador300(valor300);
      setContador12(valor12);
      
      // Terminar animación
      if (paso >= totalPasos) {
        clearInterval(timer);
        // Asegurar valores finales exactos
        setContador1970(1970);
        setContador300(300);
        setContador12(12);
      }
    }, intervalo);
  };

  return (
    <>
      <section className="w-full h-auto flex flex-col pb-10 sm:pb-16 lg:pb-20">
        <div className="bg-[#002144] flex justify-center py-4 sm:py-6">
          <img
            src="..\src\assets\BanerDos\logo-fundacion-alberto-marvelli.png"
            alt=""
            className="h-12 sm:h-16 lg:h-auto"
          />
        </div>

        <div className="relative w-full h-auto bg-cover bg-[url(..\\src\\assets\\BanerDos\\slide-sin-texto.jpg)] justify-between flex flex-col items-center pb-8 sm:pb-10 lg:pb-12 gap-8 sm:gap-12 lg:gap-20 bg-center">
          <div className="absolute inset-0 bg-[#002144] opacity-60 pointer-events-none"></div>

          
          <div className="relative z-10 w-11/12 h-auto px-4 sm:px-6 lg:pl-10 pt-5 sm:pt-6 lg:pt-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-white capitalize text-center sm:text-left">
            <h1>
              ¿Cómo Puedes Ayudar a <br /> nuestros jóvenes?
            </h1>
          </div>

          
          <div
            ref={sectionRef}
            className="relative z-10 flex flex-col sm:flex-row items-center w-11/12 sm:w-10/12 lg:w-9/12 h-auto gap-8 sm:gap-4 lg:gap-0 justify-between capitalize px-4 sm:px-0"
          >
            <div className="flex justify-center flex-col items-center p-4 sm:p-2 lg:pl-10 text-[#F3AF0C] gap-2 sm:gap-3 min-w-0">
              <FaSchool className="text-4xl sm:text-5xl lg:text-6xl" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{contador1970}</h1>
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-center">
                Se fundó el CFP
              </h1>
            </div>

            <div className="flex justify-center flex-col items-center p-4 sm:p-2 text-[#F3AF0C] gap-2 sm:gap-3 min-w-0">
              <FaPlus className="text-4xl sm:text-5xl lg:text-6xl" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{contador300}</h1>
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-center">Estudiantes</h1>
            </div>

            <div className="flex justify-center flex-col items-center p-4 sm:p-2 text-[#F3AF0C] gap-2 sm:gap-3 min-w-0">
              <FaPlus className="text-4xl sm:text-5xl lg:text-6xl" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{contador12}</h1>
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-center">
                diplomados y cursos
              </h1>
            </div>
          </div>

        
          <div className="relative z-10 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-center w-11/12 h-auto gap-4 sm:gap-6 lg:gap-10 text-lg sm:text-xl lg:text-2xl px-4 sm:px-0">
            <div className="bg-[#f3ae0ce1] w-full sm:w-auto lg:w-60 h-32 sm:h-36 lg:h-38 flex flex-row justify-center items-center capitalize hover:bg-[#4055b2] hover:border-2 hover:border-white transition-colors duration-300 cursor-pointer">
              <div className="flex-1">
                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-left pl-3">
                  Haz una <br /> Donación
                </h1>
              </div>
              <div className="flex items-center justify-end w-8 sm:w-10 h-8 sm:h-10 text-white pr-3">
                <FaArrowRight className="text-sm sm:text-base" />
              </div>
            </div>

            <div className="bg-[#ff3700d3] w-full sm:w-auto lg:w-60 h-32 sm:h-36 lg:h-38 flex flex-row justify-center items-center hover:bg-[#4055b2] hover:border-2 hover:border-white transition-colors duration-300 cursor-pointer">
              <div className="flex-1">
                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-left pl-3">
                  Donación
                  <br />
                  mensual
                </h1>
              </div>
              <div className="flex items-center justify-end w-8 sm:w-10 h-8 sm:h-10 text-white pr-3">
                <FaArrowRight className="text-sm sm:text-base" />
              </div>
            </div>

            <div className="bg-[#f3ae0ce1] w-full sm:w-auto lg:w-60 h-32 sm:h-36 lg:h-38 flex flex-row justify-center items-center hover:bg-[#4055b2] hover:border-2 hover:border-white transition-colors duration-300 cursor-pointer">
              <div className="flex-1">
                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-left pl-3">
                  Donación en
                  <br />
                  Especie
                </h1>
              </div>
              <div className="flex items-center justify-end w-8 sm:w-10 h-8 sm:h-10 text-white pr-3">
                <FaArrowRight className="text-sm sm:text-base" />
              </div>
            </div>

            <div className="bg-[#ff3700d3] w-full sm:w-auto sm:col-span-1 lg:col-span-1 lg:w-66 h-32 sm:h-36 lg:h-38 flex flex-row justify-center items-center hover:bg-[#4055b2] hover:border-2 hover:border-white transition-colors duration-300 cursor-pointer">
              <div className="flex-1">
                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-left pl-3">
                  Comprando <br /> Tickets de la <br /> Gran Rifa Salesiana
                </h1>
              </div>
              <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 text-white pr-3">
                <FaArrowRight className="text-sm sm:text-base" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;