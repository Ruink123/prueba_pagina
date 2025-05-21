
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carrucel = () => {
    const imagenes = [
        "https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/banner1-cfp-3.gif",
        "https://fundacionalbertomarvelli.org/wp-content/uploads/2022/11/GANADORES-RIFA-2022-1536x576.jpg",
        "https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/slide-sin-texto.jpg",
    ];
    
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
        <>
            {/* Carrusel oculto en móviles (menor a sm:640px) y visible en pantallas más grandes */}
            <section 
                className="hidden sm:flex bg-no-repeat bg-cover bg-center w-full transition-all duration-500 ease-in-out
                          sm:h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-screen"
                style={{ backgroundImage: `url(${imagenes[indiceActual]})` }}
            >
                <div className="flex justify-between items-center w-full h-full mx-8 text-white text-2xl">
                    <div 
                        className="cursor-pointer hover:bg-black/30 p-3 rounded-full transition-all"
                        onClick={anteriorImagen}
                    >
                        <FaArrowLeft />
                    </div>
                    <div 
                        className="cursor-pointer hover:bg-black/30 p-3 rounded-full transition-all"
                        onClick={siguienteImagen}
                    >
                        <FaArrowRight />
                    </div>
                </div>
                
                
            </section>
            
            {/* Opcionalmente, puedes mostrar una imagen estática en dispositivos móviles */}
            <div className="sm:hidden w-full">
                <img 
                    src={imagenes[0]} 
                    alt="Imagen para móviles" 
                    className="w-full h-auto"
                />
            </div>
        </>
    );
};

export default Carrucel;
