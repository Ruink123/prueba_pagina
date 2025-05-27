import { FaComputer } from "react-icons/fa6";
import { PiPlugChargingBold } from "react-icons/pi";
import { GiDrill } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BiSolidUserRectangle } from "react-icons/bi";

const Carreras = () => {
  return (
    <>
      <section className="h-auto w-ful pt-5">
        <div className="bg-violet-300 w-full h-32 flex justify-center items-center">
          <div className="bg-fuchsia-300 w-11/12 text-center">
            <h1>TITULO</h1>
          </div>
        </div>

        <div className="w-full h-auto px-6 mb-25 flex justify-center items-center flex-col gap-5 pt-5">
          <div className="w-full h-68 flex flex-row justify-between gap-3 ">
            {/* Primera carta flip - Operador y reparador de computadoras */}
            <div className="w-5/12 h-68 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Cara frontal */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0615-scaled.jpg)] bg-cover flex justify-center relative">
                    {/* Capa semitransparente */}
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>

                    {/* Contenido de texto (sin opacidad) */}
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <FaComputer className="text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
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
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0623-scaled.jpg)] bg-cover flex justify-center relative">
                    {/* Capa semitransparente */}
                    <div className="absolute inset-0 bg-neutral-900 opacity-30"></div>

                    {/* Contenido de la cara trasera */}
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="text-white w-4/5">
                        <div className="mt-4 text-center">
                          <button className="bg-[#4055b2] text-white px-3 py-1 rounded text-sm uppercase font-semibold  transition-colors cursor-pointer">
                            ver más <br /> información
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda carta flip - Redes Cisco (con rotación vertical) */}
            <div className="w-5/12 h-68 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)]">
                {/* Cara frontal */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <div className="w-full h-full bg-[#ea562b] flex justify-center relative">
                    <div className="w-full flex justify-center items-center h-full text-white flex-col">
                      <LiaNetworkWiredSolid className="text-5xl" />
                      <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                        redes cisco computación
                      </h3>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/24-scaled.jpg)] flex justify-center relative bg-cover">
                    {/* Contenido de la cara trasera */}
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="text-white w-4/5">
                        <div className="mt-4 text-center">
                          <button className="bg-[#ea562b] text-white px-3 py-1 rounded text-sm uppercase font-semibold hover:bg-white hover:text-[#ea562b] transition-colors">
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
            <div className="w-5/12 h-68 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Cara frontal */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <div className="w-full h-full bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/DSC0470-scaled.jpg)] bg-cover flex justify-center relative">
                    <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="w-24 text-white flex justify-center items-center flex-col">
                        <PiPlugChargingBold className="text-5xl font-bold" />
                        <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                          electricidad industrial y domiciliar
                        </h3>
                      </div>
                      <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                        carrera técnica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="w-full h-full bg-gradient-to-r from-[#4055b2] to-[#ea562b] flex justify-center relative">
                    <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                      <div className="text-white w-4/5">
                        <h3 className="font-bold text-center text-xl uppercase">
                          Electricidad
                        </h3>
                        <p className="text-sm text-center mt-2">
                          Forma parte del sector eléctrico con conocimientos en
                          instalaciones industriales y residenciales.
                        </p>
                        <div className="mt-4 text-center">
                          <button className="bg-white text-[#4055b2] px-3 py-1 rounded text-sm uppercase font-semibold hover:bg-[#f3af0c] hover:text-white transition-colors">
                            ver más información
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cuarta carta - Soldadura */}
            {/* Carta frontal */}
            <div className="w-5/12 h-68 group relative perspective">
              <div className="w-full h-full bg-[#4055b2] flex justify-center items-center">
                <div className="w-full flex justify-center items-center h-full text-white flex-col">
                  <img
                    src="/welding-mask_4610697.svg"
                    className="flex justify-center w-12 h-12 invert"
                  />
                  <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3 flex">
                    soldadura <br />
                    industrial
                  </h3>
                  <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                    carrera técnica
                  </div>
                </div>
              </div>

              {/* carta trasera */}
              <div class="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-lg font-semibold rotate-y-180">
                Más información
              </div>

            </div>
          </div>

          {/* El resto del código permanece igual */}
          <div className="w-full h-68 flex flex-row justify-between gap-3">
            <div className="bg-[#4055b2] w-5/12 h-68">
              <div className="w-full flex justify-center items-center h-full text-white flex-col">
                <img
                  src="/steel-beam_10393322.svg"
                  className="flex justify-center w-12 h-12 invert"
                />
                <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                  estructuras metálicas livianas
                </h3>
                <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                  carrera técnica
                </div>
              </div>
            </div>
            <div className="w-5/12 h-68 bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/14-scaled.jpg)] bg-cover flex justify-center relative">
              <div className="absolute inset-0 bg-neutral-900 opacity-60 "></div>
              <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                <div className="w-24 text-white flex justify-center items-center flex-col">
                  <GiDrill className="text-5xl font-bold" />
                  <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                    carpintería
                  </h3>
                </div>
                <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                  carrera técnica
                </div>
              </div>
            </div>
            <div className="bg-[#ea562b] w-5/12 h-68">
              <div className="w-full flex justify-center items-center h-full text-white flex-col">
                <img
                  src="/lathe-machine_9472048.svg"
                  className="flex justify-center w-12 h-12 invert"
                />
                <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                  MECANICA DE TORNO Y FRESADORA
                </h3>
                <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                  carrera técnica
                </div>
              </div>
            </div>
            <div className="w-5/12 h-68 bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2023/01/mecanica-motocicletas-scaled.jpg)] bg-cover flex justify-center relative">
              <div className="absolute inset-0 bg-neutral-900 opacity-60 "></div>

              <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                <div className="w-24 text-white flex justify-center items-center flex-col">
                  <FaMotorcycle className="text-5xl font-bold" />
                  <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                    mecánica de motocicletas
                  </h3>
                </div>
                <div className="texto1 text-center text-white uppercase text-xs w-full pt-2 font-bold">
                  carrera técnica
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-68 flex flex-row justify-between gap-3">
            <div className="w-5/12 h-68 bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/25-scaled.jpg)] bg-cover flex justify-center relative">
              <div className="absolute inset-0 bg-neutral-900 opacity-60 "></div>

              <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                <div className="w-24 text-white flex justify-center items-center flex-col">
                  <SlEarphones className="text-5xl font-bold" />
                  <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                    academia de música
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-[#ea562b] w-5/12 h-68">
              <div className="w-full flex justify-center items-center h-full text-white flex-col">
                <BiSolidUserRectangle className="flex justify-center  text-5xl" />
                <h3 className="texto1 font-bold text-center text-xl text-white uppercase pt-3">
                  academia de inglés
                </h3>
              </div>
            </div>
            <div className="bg-[#f3af0c] w-[85%] h-68 ">
              <div>
                <h2 className=" texto1  text-3xl text-left text-white font-bold pl-10 pr-20 pt-5 ">
                  Mejora tus Oportunidades | Inscribete Hoy
                </h2>

                <p className="pl-10 pr-5">
                  No pierdas la oportunidad de aprender o mejorar tus
                  conocimientos. Obtén tu Diplomado. Te abrirás nuevas
                  oportunidades de Trabajo o de Emprendimiento! Chicos y Chicas
                  son bienvenidos a nuestras carreras. Pregunta por nuestro
                  Programa de Becas
                </p>
              </div>
              <div className="pl-10 pt-5">
                <button className="bg-[#ea562b] w-46  h-12 hover:bg-[#3f51b5] transition duration-300">
                  <a
                    href="https://fundacionalbertomarvelli.org/inscripciones/"
                    className="text-white"
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
