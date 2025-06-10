import Footer from "./Footer";

const Inscripcion2025 = () => {
    return (
        <section className="w-full h-screen flex flex-col ">
            <div className="w-full h-52 md:h-64 lg:72 flex flex-col pb-12 items-center justify-center relative bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/bg2.jpg)] bg-cover bg-center">
                {/* Texto de fondo grande y translúcido */}
                <span
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none"
                    style={{
                        fontSize: "clamp(1rem, 4vw, 3rem)",
                        color: "#fff",
                        opacity: 0.18,
                        letterSpacing: "0.08em",
                        fontWeight: 700,
                        zIndex: 0,
                    }}
                    aria-hidden="true"
                >
                    FUNDACIÓN ALBERTO MARVELLI
                </span>
                {/* Subtítulo */}
                <span className="relative text-white text-base md:text-lg mb-2 font-semibold z-10 px-4 text-center pt-5">
                    Deseas Estudiar en el CFP
                </span>
                {/* Título principal */}
                <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center z-10 px-4 pt-1">
                    INSCRIPCIONES
                </h1>

            </div>

            <div className="bg-white h-auto w-full flex  ">

                <div className="bg-[#566a7c] w-full h-auto p-6  shadow-lg flex-1 ">
                    <h1 className="font-bold text-start mb-4 pt-18">
                        El CFP capacita a los jóvenes en las áreas de:
                    </h1>
                    <ul className="font-semibold text-start mx-4 pt-14">
                        <li className="mb-3">Carpintería</li>
                        <li className="mb-3">Soldadura Industrial</li>
                        <li className="mb-3">Torno Industrial y Fresadora</li>
                        <li className="mb-3">Electricidad Domiciliar e Industrial</li>
                        <li className="mb-3">Operador y Reparador de Computadoras y Técnico en Redes</li>
                        <li className="mb-3">Academia de Música</li>
                        <li className="mb-3">Que el alumno al terminar su año de estudio pueda insertarse laboralmente, en un hotel, restaurante u oficina.</li>
                        <li className="mb-3">Estructuras metálicas livianas</li>
                    </ul>
                </div>

                <div className="w-full h-auto bg-[#92a8bd] p-6 flex-1 justify-center items-center ">
                    <h1 className="font-bold text-start mb-4">
                        El CFP atiende a sus estudiantes en dos jornadas:
                    </h1>

                    <p>
                        Diaria: de 8:00 a.m. a 4:00 p.m.
                        <br />
                        Sabatina: de 8:00 a.m. a 3:00 p.m.
                    </p>

                    <h1 className="font-bold text-start mt-4 mb-4">
                        Requisitos para la inscripción:
                    </h1>

                    <ul className="font-semibold text-start  mx-4">
                        <li className="mb-3">15 a 20 años de edad en jornada diaria.</li>
                        <li className="mb-3">15 a 45 años de edad en jornada sabatina.</li>
                        <li className="mb-3">Diploma o certificado original y fotocopia del último año de estudios aprobados.</li>
                        <li className="mb-3">Operador y reparador de computadoras: Mínimo primero básico.</li>
                        <li className="mb-3">Electricidad domiciliar: Mínimo primero básico.</li>
                        <li className="mb-3">Estructuras Metálicas livianas: mínimo sexto primaria.</li>
                        <li className="mb-3">Carpintería: Mínimo sexto primaria.</li>
                        <li className="mb-3">Mecánica en torno y fresadora: mínimo primero básico.</li>
                        <li className="mb-3">Llenar ficha de inscripción en compañía de sus padres o encargados en caso de ser menor de edad (DPI original del Padre o Encargado).</li>
                        <li className="mb-3">El deseo de permanecer en la obra por dos años, según lo requerido en cada curso educativo.</li>
                        <li className="mb-3">2 Fotos tamaño cédula.</li>
                        <li className="mb-3">DPI original, más una copia si es mayor de edad.</li>
                    </ul>
                </div>

            </div>

            <section>
                <Carreras />
            </section>

            <Footer />

        </section>
    );
};

export default Inscripcion2025;