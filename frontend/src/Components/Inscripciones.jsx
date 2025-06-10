import carreras from '../data/carreras.js';
import donBosco from '../assets/noticias/don_Bosco.jpg';
import capilla from '../assets/noticias/capilla.jpeg';
import festival from '../assets/noticias/festival.jpg';
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaChevronUp, FaList } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";

const CarreraCarrusel = ({ imagenes, nombre }) => {
    const [indiceActual, setIndiceActual] = useState(0);

    const siguienteImagen = () => {
        setIndiceActual(indiceActual === imagenes.length - 1 ? 0 : indiceActual + 1);
    };

    const anteriorImagen = () => {
        setIndiceActual(indiceActual === 0 ? imagenes.length - 1 : indiceActual - 1);
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            siguienteImagen();
        }, 5000);

        return () => clearInterval(intervalo);
    }, [indiceActual]);

    return (
        <div className="carrera-carrusel">
            <div className="carrusel-container relative h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                <img
                    src={imagenes[indiceActual]}
                    alt={`${nombre} - imagen ${indiceActual + 1}`}
                    className="w-full h-full object-cover"
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 10px'
                }} className="hidden sm:flex">
                    <button
                        onClick={anteriorImagen}
                        style={{
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={siguienteImagen}
                        style={{
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <FaArrowRight />
                    </button>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '5px'
                }}>

                </div>
            </div>
        </div>
    );
};

const OtherCareersCarousel = ({ currentCarreraId }) => {
    const carouselRef = useRef(null);
    const autoScrollIntervalRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [maxScroll, setMaxScroll] = useState(0);
    
    const otherCareers = carreras.filter(carrera => carrera.id !== currentCarreraId);
    
    useEffect(() => {
        const updateMaxScroll = () => {
            if (carouselRef.current) {
                const maxScrollValue = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
                setMaxScroll(maxScrollValue);
            }
        };
        
        updateMaxScroll();
        
        window.addEventListener('resize', updateMaxScroll);
        
        return () => {
            window.removeEventListener('resize', updateMaxScroll);
        };
    }, [otherCareers]);
    
    useEffect(() => {
        if (isPaused) return;
        
        const startAutoScroll = () => {
            autoScrollIntervalRef.current = setInterval(() => {
                if (carouselRef.current) {
                    if (scrollPosition >= maxScroll - 50) {
                        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                        setScrollPosition(0);
                    } else {
                        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                        setScrollPosition(prev => Math.min(maxScroll, prev + 200));
                    }
                }
            }, 3000); 
        };
        
        startAutoScroll();
        
        return () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
            }
        };
    }, [isPaused, maxScroll, scrollPosition]);
    
    const pauseAutoScroll = () => {
        setIsPaused(true);
        
        setTimeout(() => {
            setIsPaused(false);
        }, 3000);
    };
    
    const scrollLeft = () => {
        pauseAutoScroll();
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            setScrollPosition(prev => Math.max(0, prev - 200));
        }
    };
    
    const scrollRight = () => {
        pauseAutoScroll();
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            setScrollPosition(prev => Math.min(maxScroll, prev + 200));
        }
    };
    
    return (
        <div className="mt-16 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-[#4055b2]">Otras</span> <span className="text-[#eb3703]">Carreras</span>
            </h2>
            
            <div className="relative">
                <button 
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#101828] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#3182ce] transition-colors"
                    aria-label="Anterior carrera"
                >
                    <FaArrowLeft className="text-lg" />
                </button>
                
                <div 
                    ref={carouselRef}
                    className="flex overflow-x-auto gap-4 sm:gap-6 py-6 px-10 sm:px-14 hide-scrollbar"
                    style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseEnter={pauseAutoScroll}
                    onTouchStart={pauseAutoScroll}
                    onScroll={() => {
                        if (carouselRef.current) {
                            setScrollPosition(carouselRef.current.scrollLeft);
                        }
                    }}
                >
                    {otherCareers.map((carrera) => (
                        <Link 
                            key={carrera.id} 
                            to={`/carrera/${carrera.id}`}
                            className="flex-shrink-0 w-64 sm:w-72 md:w-80 border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 bg-white flex flex-col"
                        >
                            <div className="h-44 overflow-hidden">
                                <img 
                                    src={carrera.imagenes && carrera.imagenes.length > 0 ? carrera.imagenes[0] : ''} 
                                    alt={carrera.nombre}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="font-bold text-lg mb-2 text-[#101828] line-clamp-1">{carrera.nombre}</h3>
                                <p className="text-sm text-gray-600 line-clamp-2 flex-grow">
                                    {Array.isArray(carrera.descripcion) 
                                        ? carrera.descripcion[0].substring(0, 100) + '...'
                                        : typeof carrera.descripcion === 'string'
                                            ? carrera.descripcion.substring(0, 100) + '...'
                                            : ''}
                                </p>
                                <div className="text-center mt-4">
                                    <span className="inline-block bg-[#ee9b00] text-white px-4 py-2 rounded text-sm uppercase font-semibold hover:bg-[#d68a00] transition-colors">
                                        Ver detalles
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                
                <button 
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#101828] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#3182ce] transition-colors"
                    aria-label="Siguiente carrera"
                >
                    <FaArrowRight className="text-lg" />
                </button>
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-2">
                    {maxScroll > 0 && (
                        <div className="flex items-center gap-1.5">
                            <div 
                                className={`h-2 w-2 rounded-full ${scrollPosition < maxScroll / 3 ? 'bg-[#3182ce]' : 'bg-gray-300'}`}
                            ></div>
                            <div 
                                className={`h-2 w-2 rounded-full ${scrollPosition >= maxScroll / 3 && scrollPosition < maxScroll * 2/3 ? 'bg-[#3182ce]' : 'bg-gray-300'}`}
                            ></div>
                            <div 
                                className={`h-2 w-2 rounded-full ${scrollPosition >= maxScroll * 2/3 ? 'bg-[#3182ce]' : 'bg-gray-300'}`}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const InfoTabs = ({ carrera }) => {
    const [activeTab, setActiveTab] = useState('descripcion');

    
    return (
        <div className="mt-4 w-full">
            <div className="flex flex-wrap border-b border-gray-200 mb-4">
                <button
                    onClick={() => setActiveTab('descripcion')}
                    className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-md transition-all ${
                        activeTab === 'descripcion' 
                            ? 'bg-gray-100 border-b-2 border-[#3182ce] text-[#3182ce]' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                    Descripción
                </button>
                <button
                    onClick={() => setActiveTab('requisitos')}
                    className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-md transition-all ${
                        activeTab === 'requisitos' 
                            ? 'bg-gray-100 border-b-2 border-[#3182ce] text-[#3182ce]' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                    Requisitos
                </button>
                <button
                    onClick={() => setActiveTab('aprendizaje')}
                    className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-md transition-all ${
                        activeTab === 'aprendizaje' 
                            ? 'bg-gray-100 border-b-2 border-[#3182ce] text-[#3182ce]' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                    ¿Qué Aprenderás?
                </button>
            </div>

            <div className="py-2">
                {activeTab === 'descripcion' && (
                    <div className='bg-gray-100 p-2 md:p-4 rounded-md'>
                        <div className='gap-2 flex flex-col md:flex-col justify-between items-start'>
                            {Array.isArray(carrera.descripcion) ? (
                                carrera.descripcion.map((parrafo, index) => (
                                    <p key={index} className='mx-2 md:mx-6 text-sm md:text-base mb-4'>{parrafo}</p>
                                ))
                            ) : typeof carrera.descripcion === 'string' && carrera.descripcion.includes('\n\n') ? (
                                carrera.descripcion.split(/\n\s*\n|\r\n\s*\r\n|\n\r\s*\n\r/)
                                    .filter(p => p.trim() !== '')
                                    .map((parrafo, index) => (
                                        <p key={index} className='mx-2 md:mx-6 text-sm md:text-base mb-4'>{parrafo.trim()}</p>
                                    ))
                            ) : (
                                <p className='mx-2 md:mx-6 text-sm md:text-base'>{carrera.descripcion}</p>
                                
                            )}
                        </div>
                        {carrera.Horarios && (
                            <div className='mx-4 md:mx-8'>
                                <h4 style={{ marginTop: '10px', marginBottom: '5px' }}><strong> Horarios: </strong> </h4>
                                <ul style={{ paddingLeft: '20px' }}>
                                    {carrera.Horarios.map((horario, index) => (
                                        <li key={index}>{horario}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'requisitos' && (
                    <div className='bg-gray-100 p-2 md:p-4 rounded-md'>
                        <ul style={{ paddingLeft: '20px', gap: '10px' }} className="text-sm md:text-base">
                            {carrera.Requisitos.map((requisito, index) => (
                                <li key={index}>{requisito}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'aprendizaje' && (
                    <div className='bg-gray-100 p-2 md:p-4 rounded-md'>
                        <ul style={{ paddingLeft: '20px' }} className="text-sm md:text-base">
                            {carrera['¿Qué Aprenderás del Curso?'] && carrera['¿Qué Aprenderás del Curso?'].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

const Inscripciones = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedCarrera, setSelectedCarrera] = useState(null);
    const [showCareerList, setShowCareerList] = useState(window.innerWidth >= 768);
    
    useEffect(() => {
        const handleResize = () => {
            setShowCareerList(window.innerWidth >= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Buscar la carrera correspondiente al ID de la URL
    useEffect(() => {
        // Si no hay ID en la URL o no se encuentra la carrera, usar la primera carrera
        if (!id && carreras.length > 0 && !selectedCarrera) {
            setSelectedCarrera(carreras[0]);
            return;
        }

        // Buscar la carrera por ID
        const carreraEncontrada = carreras.find(c => c.id.toString() === id || 
                                                    c.id === parseInt(id) || 
                                                    c.id.toLowerCase() === id.toLowerCase());
        
        if (carreraEncontrada) {
            setSelectedCarrera(carreraEncontrada);
        } else if (carreras.length > 0) {
            // Si no se encuentra la carrera, usar la primera como fallback
            setSelectedCarrera(carreras[0]);
        }
    }, [id]);

    const handleCarreraChange = (e) => {
        const carreraId = parseInt(e.target.value);
        const carrera = carreras.find(c => c.id === carreraId);
        setSelectedCarrera(carrera);
    };

    return (
        <>
            <section className="inscripciones-container max-w-7xl mx-auto" >
                <div className="text-center py-8 sm:py-10 md:py-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-[#4055b2]">CARRERA</span> <span className="text-[#eb3703]">TÉCNICA</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto px-4">
                        Conoce todos los detalles de nuestras carreras técnicas y prepárate para un futuro profesional exitoso.
                    </p>
                </div>

                <div className='flex justify-center items-start flex-col lg:flex-row w-full px-4 sm:px-6 md:px-8 lg:px-10 gap-8 mb-12'>
                    <div className='w-full lg:w-2/3'>
                        {selectedCarrera && (
                            <div key={selectedCarrera.id} className="carrera-card mb-8 mx-auto w-full rounded-lg overflow-hidden shadow-md bg-white">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center py-4 px-3 bg-gray-50 border-b">
                                    {selectedCarrera.nombre}
                                </h1>
                                <CarreraCarrusel imagenes={selectedCarrera.imagenes} nombre={selectedCarrera.nombre} className="bg-cover" />

                                <div className="p-4 sm:p-5 md:p-6">
                                    <InfoTabs carrera={selectedCarrera} />

                                    <Link 
                                        to={`/formulario-inscripcion?carrera=${encodeURIComponent(selectedCarrera.nombre)}`}
                                        className="block w-full mt-6 py-3 px-4 bg-[#101828] text-white font-bold rounded-md hover:bg-[#3182ce] transition-colors text-sm sm:text-base text-center"
                                    >
                                        Inscribirse
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='w-full lg:w-1/3'>
                        <div className='w-full sticky top-4'>
                            <div className='w-full max-w-md mx-auto'>
                                <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                                    {/* Cierre header */}
                                    <div 
                                        className='flex justify-between items-center p-4 bg-gray-50 cursor-pointer'
                                        onClick={() => setShowCareerList(!showCareerList)}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FaList className='text-[#4055b2]' />
                                            <div className='flex flex-row items-center gap-2'>
                                                <p className='text-[#4055b2] font-bold'>
                                                    Todos los
                                                </p>
                                                <p className='text-[#eb3703] font-bold'>
                                                    Cursos
                                                </p>
                                            </div>
                                        </div>
                                        {showCareerList ? 
                                            <FaChevronUp className='text-gray-500' /> : 
                                            <FaChevronDown className='text-gray-500' />
                                        }
                                    </div>
                                    
                                    {/* Cierre content */}
                                    <div 
                                        className={`collapsible-content ${
                                            showCareerList ? 'open' : 'closed'
                                        }`}
                                    >
                                        <ul className='flex flex-col w-full justify-center items-start text-lg pl-4 md:pl-8 py-4 text-black font-semibold'>
                                            {carreras.map((carrera) => (
                                                <li
                                                    key={carrera.id}
                                                    onClick={() => {
                                                        setSelectedCarrera(carrera);
                                                        // Optional: cierre de la lists en mobile
                                                        if (window.innerWidth < 768) {
                                                            setShowCareerList(false);
                                                        }
                                                    }}
                                                    className="cursor-pointer hover:text-[#3182ce] transition-colors duration-200"
                                                    style={{
                                                        fontWeight: selectedCarrera && selectedCarrera.id === carrera.id ? 'bold' : 'normal',
                                                        color: selectedCarrera && selectedCarrera.id === carrera.id ? '#3182ce' : 'inherit',
                                                        marginBottom: '8px'
                                                    }}
                                                >
                                                    : {carrera.nombre}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-900 h-auto w-full max-w-md mx-auto p-4 mt-8 rounded-md'>
                                <div className='text-lg font-semibold mb-4 flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[#4055b2] font-bold'> Notas de </p>
                                    <p className='text-[#eb3703] font-bold'> Interés </p>
                                </div>
                                <div 
                                    className='mb-2 bg-white h-auto min-h-[5rem] w-full p-2 md:p-4 rounded-md flex flex-row justify-start items-center gap-2 cursor-pointer hover:shadow-md transition-shadow'
                                    onClick={() => navigate("/noticia/207_CUMPLEAÑOS_DE_SAN_JUAN_BOSCO")}
                                >
                                    <img className='w-16 h-10 md:w-18 md:h-12' src={donBosco} alt="Don Bosco" />
                                    <div className='w-full'>
                                        <p className='text-xs sm:text-sm font-medium'> 207 CUMPLEAÑOS DE SAN JUAN BOSCO </p>
                                        <div className='flex flex-row justify-around items-center'>
                                            <p className='text-xs'> 16 de agosto de 2022 </p>
                                            <p className='text-center flex justify-center items-center hidden sm:block'>°</p>
                                            <p className='text-xs'> Vida en CFP </p>
                                        </div>
                                    </div>
                                </div>

                                <div 
                                    className='mb-2 bg-white h-auto min-h-[5rem] w-full p-2 md:p-4 rounded-md flex flex-row justify-start items-center gap-2 cursor-pointer hover:shadow-md transition-shadow'
                                    onClick={() => navigate("/noticia/LA_CAPILLA_PINARDI_DEL_CENTRO_DE_FORMACION_PROFESIONAL_P._BARTOLOME AMBROSIO")}
                                >
                                    <img className='w-16 h-10 md:w-26 md:h-12' src={capilla} alt="Capilla" />
                                    <div className='w-full'>
                                        <p className='text-xs sm:text-sm font-medium'> LA CAPILLA PINARDI DEL CENTRO DE FORMACION PROFESIONAL P. BARTOLOME AMBROSIO </p>
                                        <div className='flex flex-row justify-around items-center'>
                                            <p className='text-xs'> 16 de agosto de 2022 </p>
                                            <p className='text-center flex justify-center items-center hidden sm:block'>°</p>
                                            <p className='text-xs'> Vida en CFP </p>
                                        </div>
                                    </div>
                                </div>

                                <div 
                                    className='mb-2 bg-white h-auto min-h-[5rem] w-full p-2 md:p-4 rounded-md flex flex-row justify-start items-center gap-2 cursor-pointer hover:shadow-md transition-shadow'
                                    onClick={() => navigate("/noticia/PARTICIPACIÓN_DE_JÓVENES")}
                                >
                                    <img className='w-16 h-10 md:w-26 md:h-12' src={festival} alt="Festival" />
                                    <div className='w-full'>
                                        <p className='text-xs sm:text-sm font-medium'> <strong> PARTICIPACIÓN DE JÓVENES EN FESTO 2022: </strong> FESTIVAL SALESIANO DE TALENTO ORATORIANO </p>
                                        <div className='flex flex-row justify-around items-center'>
                                            <p className='text-xs'> 16 de agosto de 2022 </p>
                                            <p className='text-center flex justify-center items-center hidden sm:block'>°</p>
                                            <p className='text-xs'> Vida en CFP </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {selectedCarrera && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pb-12">
                        <div className="bg-gray-50 py-8 sm:py-10 px-4 sm:px-6 rounded-lg">
                            <OtherCareersCarousel currentCarreraId={selectedCarrera.id} />
                        </div>
                    </div>
                )}
            </section>
        </>

    );
};

export default Inscripciones;