import Carreras1 from "../data/archivo";
import { LuFilePenLine } from "react-icons/lu";


import * as fa6Icons from "react-icons/fa6";
import * as liaIcons from "react-icons/lia";
import * as piIcons from "react-icons/pi";
import * as giIcons from "react-icons/gi";
import * as slIcons from "react-icons/sl";
import * as biIcons from "react-icons/bi";

const CarrerasDos = () => {
  const colores = ["bg-[#ea562b]", "bg-[#4055b2]"];

  const libraries = {
    Fa: fa6Icons,
    Lia: liaIcons,
    Pi: piIcons,
    Gi: giIcons,
    Sl: slIcons,
    Bi: biIcons,
  };

  return (
    <>
      <section className="h-auto w-full pt-5 px-2 sm:px-4 md:px-6 bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/bckg-1.jpg)] bg-cover  h-auto pb-10 flex items-center flex-col">
        <div className="w-10/12 h-10/12 flex items-center flex-col justify-center ]">
          <div className="w-full h-auto flex  flex-col bg-violet-300  items-center">
            <div className="bg-white w-full text-center  md:text-4xl font-bold flex flex-col gap-4">
              <h1>Cursos técnicos avalados por la DIGEEX</h1>
              <h1>(Dirección General de Educación Extraescolar)</h1>
            </div>

            <div className="bg-[#f2f2f2] w-full text-center  h-auto md:text-xl flex flex-col py-5">
              <p>
                Elige el Curso que deseas estudiar y <br /> procede a llenar la{" "}
                <strong>Ficha de Inscripción</strong> <br /> que esta dentro de
                la información del curso
              </p>
            </div>
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
                  <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-full h-68 group perspective md:w-full ">
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
                        <div className="w-full h-full  flex justify-center relative">
                          <div key={carrera.id}>
                            <img
                              src={carrera.imagen2}
                              className="w-full h-full object-cover fixed"
                            ></img>
                          </div>
                          <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                            <button className="bg-[#ee9b00] text-white px-3 py-1 rounded text-sm uppercase font-semibold transition-colors cursor-pointer border-white border-2">
                              ver más <br /> información
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full sm:w-full lg:w-full lg:h-56 h-auto sm:h-68 bg-[#f3af0c]  ">
              <div className="p-4 md:p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="texto1 text-2xl md:text-3xl text-left text-white font-bold">
                    Mejora tus Oportunidades | Inscribete Hoy
                  </h2>
                </div>

                <div className="mt-4  w-11/12 flex flex-col gap-4 ">
                  <ul className="list-disc pl-12">
                    <li>
                      No pierdas la oportunidad de aprender o mejorar tus
                      conocimientos.
                    </li>
                    <li>Obtén tu Diplomado.</li>
                    <li>
                      Te abrirás nuevas oportunidades de Trabajo o de
                      Emprendimiento!
                    </li>
                    <li>
                      Chicos y Chicas son bienvenidos a nuestras carreras.
                    </li>
                  </ul>

                  <p className="text-center md:text-start">
                    <strong>PREGUNTA POR NUESTRO PROGRAMA DE BECAS</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex flex-row items-center justify-center gap-3 w-68 mt-6 py-3 px-4 bg-[#101828] text-white  rounded-md hover:bg-[#3182ce] transition-colors text-sm sm:text-base text-center">
              <LuFilePenLine className=" text-center text-xl"/>

               
              <h1>Formulario De Incripción</h1>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarrerasDos;
