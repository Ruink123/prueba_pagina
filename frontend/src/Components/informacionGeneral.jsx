
import { BiSolidFile } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlineCube } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const InformacionGeneral = () => {
    // Estado para controlar qué cuadro está seleccionado o con hover
    const [activeCard, setActiveCard] = useState(null);

    const navigate = useNavigate();

    // Función para manejar cuando el mouse entra en un cuadro
    const handleMouseEnter = (cardId) => {
        setActiveCard(cardId);
    };

    // Función para manejar la selección de cuadros (click)
    const handleCardSelect = (cardId) => {
        setActiveCard(cardId);
    };

    return (
        <>
            <section className="bg-[#284b70] h-auto lg:h-auto w-full ">
                {/* Contenedor principal con grid */}
                <div className="w-full h-auto grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-2 gap-4 px-4 md:py-12 sm:pl-5 pt-5">

                    {/* Primer cuadro - Inscripciones 2024 */}
                    <div
                        className={`col-span-2 lg:col-span-1 relative lg:h-48 ${activeCard === 1 ? 'bg-[#ea562b]' : 'bg-[#f3af0c]'} w-full border border-white transition duration-300 group mb-4 md:mb-0 cursor-pointer`}
                        onClick={() => handleCardSelect(1)}
                        onMouseEnter={() => handleMouseEnter(1)}
                    >
                        <div className="absolute right-0 bottom-0 flex justify-end opacity-20 text-white text-[100px] md:text-[100px] lg:text-[160px] pr-2 group-hover:rotate-90 transition duration-300">
                            <BiSolidFile />
                        </div>
                        <div className="pl-6 py-6 flex flex-col gap-3 z-10">
                            <p className="text-white font-semibold text-base text-left">
                                Inscribete hoy mismo
                            </p>
                            <p className="text-white font-bold text-xl md:text-2xl text-left">
                                Inscripciones 2024
                            </p>
                            <Link to="/inscripciones2025">
                                <button
                                    className={`${activeCard === 1 ? ' h-10 bg-[#e91e63] text-[#ffffff]' : 'bg-[#ffffff] text-black'} font-semibold py-2 px-4 rounded mt-2 w-fit capitalize shadow`}
                                >
                                    Ver Más
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Segundo cuadro - Carreras Técnicas */}
                    <div
                        className={`row-start-2 lg:row-start-1 lg:col-start-2 relative lg:h-48 ${activeCard === 2 ? 'bg-[#ea562b]' : 'bg-[#f3af0c]'} w-full border border-white transition duration-300 group cursor-pointer`}
                        onClick={() => handleCardSelect(2)}
                        onMouseEnter={() => handleMouseEnter(2)}
                    >
                        <div className="absolute right-0 bottom-0 flex justify-end opacity-20 text-white text-[100px] md:text-[140px] lg:text-[160px] pr-2 group-hover:rotate-90 transition duration-300">
                            <TfiMenuAlt />
                        </div>
                        <div className="pl-6 py-6 flex flex-col gap-3 z-10">
                            <p className="text-white font-semibold text-base text-left">
                                Estudia con Nosotros
                            </p>
                            <p className="text-white font-bold text-xl md:text-2xl text-left">
                                Carreras Técnicas
                            </p>
                            <Link to="/carrera-tecnica"
                               onClick={() => navigate(`/carrera-tecnica`)}
                            >

                                <button
                                    className={`${activeCard === 2 ? ' h-10 bg-[#e91e63] text-[#ffffff]' : 'bg-[#ffffff] text-black'} font-semibold py-2 px-4 rounded mt-2 w-fit capitalize shadow`}
                                >
                                    Ver Más
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Tercer cuadro - DONA HOY */}
                    <div
                        className={`row-start-2 lg:row-start-1 lg:col-start-3 relative lg:h-48 ${activeCard === 3 ? 'bg-[#ea562b]' : 'bg-[#f3af0c]'} w-full border border-white transition duration-300 group cursor-pointer`}
                        onClick={() => handleCardSelect(3)}
                        onMouseEnter={() => handleMouseEnter(3)}
                    >
                        <div className="absolute right-0 bottom-0 flex justify-end opacity-20 text-white text-[100px] md:text-[140px] lg:text-[160px] pr-2 group-hover:rotate-90 transition duration-300">
                            <HiOutlineCube />
                        </div>
                        <div className="pl-6 py-6 flex flex-col gap-3 z-10">
                            <p className="text-white font-semibold text-base text-left">
                                Apoya nuestro Fondo de Becas
                            </p>
                            <p className="text-white font-bold text-base md:text-xl text-left">
                                DONA HOY
                            </p>
                            <Link to="/donahoy">
                                <button
                                    className={`${activeCard === 3 ? ' h-10 bg-[#e91e63] text-[#ffffff]' : 'bg-[#ffffff] text-black'} font-semibold py-2 px-4 rounded mt-2 w-fit capitalize shadow`}
                                >
                                    Ver Más
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Cuarto cuadro - Acerca de nosotros */}
                    <div
                        className={`col-span-2 lg:col-span-1 lg:row-start-2 relative lg:h-48 ${activeCard === 4 ? 'bg-[#ea562b]' : 'bg-[#f3af0c]'} w-full border border-white transition duration-300 group mb-4 md:mb-0 cursor-pointer`}
                        onClick={() => handleCardSelect(4)}
                        onMouseEnter={() => handleMouseEnter(4)}
                    >
                        <div className="absolute right-0 bottom-0 flex justify-end opacity-20 text-white text-[100px] md:text-[140px] lg:text-[160px] pr-2 group-hover:rotate-90 transition duration-300">
                            <IoPersonSharp />
                        </div>
                        <div className="pl-6 py-6 flex flex-col gap-3 z-10">
                            <p className="text-white font-semibold text-base text-left">
                                Conocenos
                            </p>
                            <p className="text-white font-bold text-xl md:text-2xl text-left">
                                Acerca de nosotros
                            </p>
                            <Link to="/nosotros">
                                <button
                                    className={`${activeCard === 4 ? ' h-10 bg-[#e91e63] text-[#ffffff]' : 'bg-[#ffffff] text-black'} font-semibold py-2 px-4 rounded mt-2 w-fit capitalize shadow`}
                                >
                                    Ver Más
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Quinto cuadro - Gran rifa salesiana */}
                    <div
                        className={`row-start-4 lg:row-start-2 lg:col-start-2 relative lg:h-48 ${activeCard === 5 ? 'bg-[#ea562b]' : 'bg-[#f3af0c]'} w-full border border-white transition duration-300 group mb-4 md:mb-0 cursor-pointer`}
                        onClick={() => handleCardSelect(5)}
                        onMouseEnter={() => handleMouseEnter(5)}
                    >
                        <div className="absolute right-0 bottom-0 flex justify-end opacity-20 text-white text-[100px] md:text-[140px] lg:text-[160px] pr-2 group-hover:rotate-90 transition duration-300">
                            <IoPersonSharp />
                        </div>
                        <div className="pl-6 py-6 flex flex-col gap-3 z-10">
                            <p className="text-white font-semibold text-base text-left">
                                Participa
                            </p>
                            <p className="text-white font-bold text-xl md:text-2xl text-left">
                                Gran rifa salesiana
                            </p>
                            <Link to="/rifa">
                                <button
                                    className={`${activeCard === 5 ? ' h-10 bg-[#e91e63] text-[#ffffff]' : 'bg-[#ffffff] text-black'} font-semibold py-2 px-4 rounded mt-2 w-fit capitalize shadow`}
                                >
                                    Ver Más
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Sexto cuadro - Contáctanos */}
                    <div
                        className={`row-start-4 lg:row-start-2 lg:col-start-3 relative lg:h-48 ${activeCard === 6 ? 'bg-[#ea562b]' : 'bg-[#f3af0c]'} w-full border border-white transition duration-300 group mb-4 md:mb-0 cursor-pointer`}
                        onClick={() => handleCardSelect(6)}
                        onMouseEnter={() => handleMouseEnter(6)}
                    >
                        <div className="absolute right-0 bottom-0 flex justify-end opacity-20 text-white text-[100px] md:text-[140px] lg:text-[160px] pr-2 group-hover:rotate-90 transition duration-300">
                            <SlEnvolopeLetter />
                        </div>
                        <div className="pl-6 py-6 flex flex-col gap-3 z-10">
                            <p className="text-white font-semibold text-base text-left">
                                ¿tines aluguna duda?
                            </p>
                            <p className="text-white font-bold text-xl md:text-2xl text-left">
                                contáctanos
                            </p>
                            <Link to="/contacto">
                                <button
                                    className={`${activeCard === 6 ? ' h-10 bg-[#e91e63] text-[#ffffff]' : 'bg-[#ffffff] text-black'} font-semibold py-2 px-4 rounded mt-2 w-fit capitalize shadow`}
                                >
                                    Ver Más
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InformacionGeneral;
