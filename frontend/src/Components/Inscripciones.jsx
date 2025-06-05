import carreras from '../data/carreras.js';
import donBosco from '../assets/noticias/don_Bosco.jpg';
import capilla from '../assets/noticias/capilla.jpeg';
import festival from '../assets/noticias/festival.jpg';
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useParams } from "react-router-dom";

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

const InfoTabs = ({ carrera }) => {
    const [activeTab, setActiveTab] = useState('descripcion');

    const tabStyle = {
        container: {
            marginTop: '20px',
            width: '100%'
        },
        tabs: {
            display: 'flex',
            borderBottom: '1px solid #ddd',
            marginBottom: '15px'
        },
        tab: {
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px 5px 0 0',
            fontWeight: '500',
            transition: 'all 0.3s ease'
        },
        activeTab: {
            backgroundColor: '#f0f0f0',
            borderBottom: '3px solid #3182ce'
        },
        content: {
            padding: '10px 0'
        }
    };

    return (
        <div style={tabStyle.container}>
            <div style={tabStyle.tabs} className="flex flex-wrap">
                <div
                    style={{
                        ...tabStyle.tab,
                        ...(activeTab === 'descripcion' ? tabStyle.activeTab : {})
                    }}
                    onClick={() => setActiveTab('descripcion')}
                    className="text-sm md:text-base"
                >
                    
                    Descripción
                </div>
                <div
                    style={{
                        ...tabStyle.tab,
                        ...(activeTab === 'requisitos' ? tabStyle.activeTab : {})
                    }}
                    onClick={() => setActiveTab('requisitos')}
                    className="text-sm md:text-base"
                >
                    Requisitos
                </div>
                <div
                    style={{
                        ...tabStyle.tab,
                        ...(activeTab === 'aprendizaje' ? tabStyle.activeTab : {})
                    }}
                    onClick={() => setActiveTab('aprendizaje')}
                    className="text-sm md:text-base"
                >
                    ¿Qué Aprenderás?
                </div>
            </div>

            <div style={tabStyle.content}>
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
    const [selectedCarrera, setSelectedCarrera] = useState(null);

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
                <div className="inscripciones-header px-4 md:px-0 pt-7" style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '1.9rem', marginBottom: '10px' }} className="md:text-2xl font-bold lg:text-3xl">CARRERA TÉCNICA</h1>
                    <div className="carrera-selector mb-4">

                    </div>
                </div>

                <div className='flex justify-center items-stretch flex-col md:flex-row w-full md:w-[100%] lg:w-full xl:w-full md:mx-12 lg:mx-auto' style={{ padding: '0 20px', marginBottom: '30px' }}>
                    <div className='w-full md:flex-1 md:max-w-[65%] lg:max-w-[70%]'>
                        {selectedCarrera && (
                            <div key={selectedCarrera.id} className="carrera-card mb-8 mx-auto max-w-4xl" style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                backgroundColor: 'white'
                            }}>
                                <h1 style={{ padding: '15px', margin: 0, backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }} className="text-lg md:text-xl lg:text-2xl">
                                    {selectedCarrera.nombre}
                                </h1>
                                <CarreraCarrusel imagenes={selectedCarrera.imagenes} nombre={selectedCarrera.nombre} className="bg-cover" />

                                <div style={{ padding: '10px', '@media (min-width: 768px)': { padding: '15px' } }} className="p-3 md:p-4">
                                    <InfoTabs carrera={selectedCarrera} />

                                    <button style={{
                                        width: '100%',
                                        backgroundColor: '#101828',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        marginTop: '20px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        transition: 'background-color 0.3s ease'
                                    }} className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base hover:bg-[#3182ce]">
                                        Inscribirse
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='w-full md:flex-1 mt-8 md:mt-0 md:ml-4 lg:ml-8 md:max-w-[35%] lg:max-w-[30%]'>
                        <div className='w-full h-full'>
                            <ul className='flex flex-col w-full md:w-[375px] mx-auto justify-center items-start text-lg pl-4 md:pl-8 pt-6 md:pt-12 text-black font-semibold'>
                                <div className='flex flex-row justify-center items-start mb-8 gap-2'>
                                    <p className='text-[#4055b2] font-bold'>
                                        Todos los
                                    </p>
                                    <p className='text-[#eb3703] font-bold'>
                                        Cursos
                                    </p>
                                </div>

                                {carreras.map((carrera) => (
                                    <li
                                        key={carrera.id}
                                        onClick={() => setSelectedCarrera(carrera)}
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
                            <ul className='bg-gray-900 h-auto w-full md:w-[375px] mx-auto p-4 mt-8 rounded-md'>
                                <div className='text-lg font-semibold mb-4 flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[#4055b2] font-bold'> Notas de </p>
                                    <p className='text-[#eb3703] font-bold'> Interés </p>
                                </div>
                                <div className='mb-2 bg-white h-auto min-h-[5rem] w-full p-2 md:p-4 rounded-md flex flex-row justify-start items-center gap-2'>
                                    <img className='w-16 h-10 md:w-18 md:h-12' src={donBosco} alt="" />
                                    <div className='w-full'>
                                        <p className='text-xs sm:text-sm'> 207 CUMPLEAÑOS DE SAN JUAN BOSCO </p>
                                        <div className='flex flex-row justify-around items-center'>
                                            <p className='text-xs'> 16 de agosto de 2022 </p>
                                            <p className='text-center flex justify-center items-center hidden sm:block'>°</p>
                                            <p className='text-xs'> Vida en CFP </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-2 bg-white h-auto min-h-[5rem] w-full p-2 md:p-4 rounded-md flex flex-row justify-start items-center gap-2'>
                                    <img className='w-16 h-10 md:w-26 md:h-12' src={capilla} alt="" />
                                    <div className='w-full'>
                                        <p className='text-xs sm:text-sm'> LA CAPILLA PINARDI DEL CENTRO DE FORMACION PROFESIONAL P. BARTOLOME AMBROSIO </p>
                                        <div className='flex flex-row justify-around items-center'>
                                            <p className='text-xs'> 16 de agosto de 2022 </p>
                                            <p className='text-center flex justify-center items-center hidden sm:block'>°</p>
                                            <p className='text-xs'> Vida en CFP </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-2 bg-white h-auto min-h-[5rem] w-full p-2 md:p-4 rounded-md flex flex-row justify-start items-center gap-2'>
                                    <img className='w-16 h-10 md:w-26 md:h-12' src={festival} alt="" />
                                    <div className='w-full'>
                                        <p className='text-xs sm:text-sm'> <strong> PARTICIPACIÓN DE JÓVENES EN FESTO 2022: </strong> FESTIVAL SALESIANO DE TALENTO ORATORIANO </p>
                                        <div className='flex flex-row justify-around items-center'>
                                            <p className='text-xs'> 16 de agosto de 2022 </p>
                                            <p className='text-center flex justify-center items-center hidden sm:block'>°</p>
                                            <p className='text-xs'> Vida en CFP </p>
                                        </div>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>

            </section>
        </>

    );
};

export default Inscripciones;