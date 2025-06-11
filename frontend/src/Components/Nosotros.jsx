import React, { useState } from "react";
import imagen from "../assets/Nosotros/imagen-nosotros.jpg";
import fondo from "../assets/Nosotros/fondo1.jpg";
import bosco from "../assets/Nosotros/don-bosco.jpg";
// import Header from "./Header";
import { FaMeteor } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const tabs = [
  {
    title: "Nuestra Obra",
    content: (
      <>
        <p>
          Guatemala ha sido favorecida con la educación ofrecida por los
          salesianos de Don Bosco desde su llegada en 1932.
        </p>
        <p className="mt-2">
          Don Bosco, cuyo afán era buscar el bien de la niñez y juventud de su
          época, procuró alejarlos de una vida de crimen en las pandillas, que
          era para muchos de ellos la única opción de sustento, por medio de una
          educación accesible y que permitiera obtener un trabajo honrado y
          digno.
        </p>
        <p className="mt-2">
          Don Bosco fundó escuelas (matutinas, vespertinas y nocturnas),
          colegios e internados, pero, muy particularmente, obras técnicas con
          las cuales los salesianos de Don Bosco se han dado a conocer en más de
          130 países.
        </p>
        <p className="mt-2">
          El Centro de Formación Profesional Padre Bartolomé Ambrosio fue
          fundado en el año 1979, ubicado en la 39 Calle "B" 6-69 zona 8 de la
          Ciudad Capital de Guatemala.
        </p>
        <p className="mt-2">
          La educación ofrecida por el CFP no es únicamente en el área técnica
          sino integral, por lo que se ofrece cuidado en las áreas de la salud,
          como dermatología, oftalmología, psicología y medicina general.
        </p>
        <p className="mt-2">
          La educación espiritual es el área prioritaria y el CFP busca que cada
          joven viva en un ambiente religioso, propiciando un distintivo de
          credo y respetando a cada joven desde su particular creencia en Dios,
          sin un sinfín de principios y valores que a posteriori garantizan a
          las empresas empleadoras el ya solicitado "Buenos Cristianos y
          Honrados Ciudadanos".
        </p>
        <p className="mt-2">
          El joven estudiante del CFP no se ajeno a los valores de honradez,
          puntualidad, lealtad, decoro, buenas costumbres y el cumplimiento en
          un trabajo bien realizado. Garantía que ha ido de la mano de los
          egresados de los diferentes niveles del "CFP".
        </p>
        <p className="mt-2">
          La educación impartida por el CFP también busca guiar a los jóvenes
          hacia una sana recreación a través del deporte, música y desarrollo
          humano.
        </p>
        <p className="mt-2">
          A pesar de ser sencilla y modesta, el CFP es una obra de vanguardia en
          aspectos pedagógicos, ya que su personal docente y administrativo se
          capacita en los institutos de enseñanza en Guatemala o del ámbito
          salesiano en el exterior.
        </p>
        <p className="mt-2">
          La obra es bien apreciada por los jóvenes de la ciudad de Guatemala y
          zonas aledañas: San José Pinula, San Juan Sacatepéquez, San Juan
          Comalapa, San Raymundo de Peñaflor, Aldea El Encinal, Villa Nueva,
          Villa de Mixco.
        </p>
      </>
    ),
  },
  {
    title: "¿Qué educación ofrece el CFP?",
    content: (
      <>
        <p>
          Desde hace más de una década, los salesianos de Don Bosco en conjunto
          con sus ex alumnos y la Fundación para la Educación y Promoción Humana
          Alberto Marvelli atienden a cerca de 300 jóvenes en la zona 8 de la
          ciudad capital por medio del Centro de Formación Profesional.
        </p>
        <p className="mt-2">El CFP capacita a los jóvenes en las áreas de:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Carpintería</li>
          <li>Soldadura Industrial</li>
          <li>Torno Industrial y Fresadora</li>
          <li>Electricidad Domiciliar e Industrial</li>
          <li>Operador y Reparador de Computadoras y Técnico en Redes</li>
          <li>
            Alcanzar el 75% de inglés y puede insertarse laboralmente en un Call
            Center
          </li>
          <li>
            Que el alumno al salir de su estudio pueda insertarse laboralmente,
            en un hotel, restaurante u oficina y que logre insertarse al
            diversificado
          </li>
          <li>Estructuras metálicas livianas</li>
        </ul>
        <p className="mt-2">
          El CFP atiende a sus estudiantes en dos jornadas:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Diaria: de 8:00 a.m. a 4:00 p.m.</li>
          <li>Sabatina: de 8:00 a.m. a 3:00 p.m.</li>
        </ul>
        <p className="mt-2">
          La oferta educativa del CFP es para aquellos jóvenes que cumplan con
          los requisitos mínimos de:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>15 Años de edad</li>
          <li>Haber cursado por lo menos la primaria</li>
          <li>
            Seguir una programación de secundaria, dependiendo del curso a
            seguir
          </li>
          <li>
            Certificado de buena conducta de dos testigos, según el requerido en
            cada curso educativo
          </li>
          <li>Certificado de Nacimiento (2 meses de vigencia)</li>
          <li>2 fotografías tamaño cédula, 2 fotografías tamaño infantil</li>
          <li>DPI original, más una copia si es mayor de edad</li>
          <li>Certificado del último año aprobado</li>
        </ul>
      </>
    ),
  },
  {
    title: "Visión de Futuro",
    content: (
      <>
        <p>
          El CFP ha logrado a través de los años satisfacer los requerimientos
          de los jóvenes y del empresariado guatemalteco.
        </p>
        <br />
        <p>
          en muchos casos ha hecho posible la implementación de Pequeñas
          Empresas gracias a la formación empresarial fomentada en los años
          estudiantiles y como resultado de su búsqueda de superación del joven
          egresado.
        </p>
        <br />
        <p>
          Al visitar los pueblos cercanos no es extraño encontrar pequeños y
          medianos talleres en crecimiento constante.
        </p>
        <br />
        <p>
          Algunos egresados del CFP han encontrado un espacio en el mundo del
          trabajo en tierras lejanas basta recordad el ultimo exalumno emigrado
          a la lejana áfrica.
        </p>
        <br />
        <p>
          Otros han redescubierto a través de la formación técnica la necesidad
          de una continua educación superior por lo que varios de ellos se
          encuentran hoy día ocupando un asiento universitario particularmente
          frecuentando las facultades de las más diversas ingenierías.
        </p>
        <br />
        <p>
          Otros se han sentido llamados a la vida religiosa tanto dentro de la
          Iglesia Católica como de otras denominaciones por lo que no resulta
          extraño saber que sus egresados implementan labores pastorales en
          otras tierras.
        </p>
        <br />
        <p>
          Sin faltar quienes sienten el llamado a la conformación seria y
          responsable de una familia lo cual en buena medida garantiza a futuro
          un resurgir del ya deteriorado tejido social.
        </p>
        <br />
        <p>
          El asociacionismo a los egresados del Centro de Formación Profesional
          no les es ajeno ni extraño ya que a través de su Asociación Local de
          Exalumnos se agrupan para reciprocar la "Educación Recibida" por lo
          cual suelen apoyar a otros egresados que han sido tocados por el dolor
          -enfermedad, la muerte o la falta de empleo-, un alto sentido de la
          responsabilidad social los lanza a patrocinar otras obras benéficas
          con acciones sencillas pero significativas y concretas, emulando d
          este modo lo que en el Centro de Formación Profesional Padre Bartolomé
          Ambrosio aprendieron a vivir.
        </p>
      </>
    ),
  },
];

const Nosotros = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tab, setTab] = useState("mision");

  return (
    <>
      {/* Sección de imagen principal - responsive en altura */}
      <div className="w-full">
        <img
          src={imagen}
          alt="Nosotros"
          className="w-full h-48 md:h-72 lg:h-[420px] object-cover"
          style={{ maxHeight: "420px" }}
        />
      </div>

      {/* Sección con fondo de imagen - responsive en padding y tamaño de fuente */}
      <div
        className="relative flex flex-col items-center justify-center py-6 md:py-8 lg:py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {/* Texto de fondo grande y translúcido - responsive */}
        <span
          className="absolute left-0 right-0 top-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            height: "120px", // Más pequeño en móvil
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <span
            className="font-extrabold tracking-wider uppercase text-center w-full"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.2rem)", // Tamaño responsive con clamp
              color: "#fff",
              opacity: 0.1,
              letterSpacing: "0.08em",
              lineHeight: 1.1,
              textShadow: "0 1px 4px #000",
            }}
          >
            FUNDACIÓN ALBERTO MARVELLI
          </span>
        </span>
        {/* Subtítulo */}
        <span className="relative text-white text-base md:text-lg mb-2 font-bolt z-10 px-4 text-center">
          Acerca de la Fundación
        </span>
        {/* Título principal - responsive */}
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-4 md:mb-8 z-10 px-4">
          ¿QUIÉNES SOMOS?
        </h1>

        {/* Contenedor centrado para tabs y contenido - responsive en ancho y padding */}
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          {/* Tabs - responsive con scroll horizontal en móvil */}
          <div className="flex relative justify-start md:justify-center overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {tabs.map((tab, idx) => (
              <div key={tab.title} className="relative flex-shrink-0">
                <button
                  className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold focus:outline-none rounded-t-sm whitespace-nowrap
${
  activeTab === idx
    ? "bg-[#eb572a] text-white "
    : "text-white hover:bg-[#f2ad0c]"
}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.title}
                </button>
                {activeTab === idx && (
                  <span
                    className="absolute left-1/2 -bottom-3 transform -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "12px solid transparent",
                      borderRight: "12px solid transparent",
                      borderTop: "12px solid #e53e3e",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Contenido de pestaña - responsive en padding y tamaño de texto */}
          <div className="bg-white bg-opacity-95 rounded-b text-shadow-2xs p-4 md:p-6 shadow text-gray-900 text-sm md:text-base leading-relaxed rounded-sm overflow-y-auto max-h-[60vh] md:max-h-none">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>

      {/* Sección Misión y Visión - responsive en altura y layout */}
      <div className="w-full bg-orange-400 flex justify-start h-auto">
        <div className="w-full py-8 md:py-12 flex justify-center">
          <div className="bg-white rounded shadow-lg w-full max-w-4xl mx-4 h-[10%]">
            {/* Imagen - responsive en altura */}
            <img
              src={bosco}
              alt="Foto institucional"
              className="w-full h-48 md:h-72 object-cover"
            />

            {/* Tabs de Misión/Visión - responsive */}
            <div className="flex bg-gray-700 text-white relative ">
              <button
                className={`flex-1 py-2 md:py-3 text-center text-sm md:text-base font-medium focus:outline-none relative ${
                  tab === "mision" ? "bg-gray-800" : ""
                }`}
                onClick={() => setTab("mision")}
              >
                <span className="inline-flex items-center justify-center gap-1 md:gap-2">
                  <FaMeteor className="text-xs md:text-base" />
                  <span>Misión</span>
                </span>
                {tab === "mision" && (
                  <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2">
                    <svg width="20" height="10">
                      <polygon points="0,0 10,10 20,0" fill="#2d3748" />
                    </svg>
                  </span>
                )}
              </button>
              <button
                className={`flex-1 py-2 md:py-3 text-center text-sm md:text-base font-medium focus:outline-none relative ${
                  tab === "vision" ? "bg-gray-800" : ""
                }`}
                onClick={() => setTab("vision")}
              >
                <span className="inline-flex items-center justify-center">
                  <div className="bg-white text-gray-800 p-1 mr-1 md:mr-2">
                    <TfiMenuAlt className="text-xs md:text-base" />
                  </div>
                  <span>Visión</span>
                </span>
                {tab === "vision" && (
                  <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2">
                    <svg width="20" height="10">
                      <polygon points="0,0 10,10 20,0" fill="#2d3748" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Contenido de Misión/Visión - corregido height y padding responsive */}
            <div className="p-4 md:p-8 text-sm md:text-base min-h-[100px] bg-white">
              {tab === "mision" && (
                <>
                  <p>
                    Somos una Comunidad Educativa Salesiana, integrada por
                    laicos y salesianos de Don Bosco que formamos y educamos
                    para el trabajo a los jóvenes de Guatemala.
                  </p>
                  <br />
                  <p>
                    Nuestros referentes preferenciales, son los principios
                    pedagógicos de Don Bosco, utilizando la instrucción basada
                    en competencias, emprendimiento y habilidades para la vida
                    con el fin de incidir positivamente en la realidad del país.
                  </p>
                </>
              )}
              {tab === "vision" && (
                <>
                  <p>
                    Ser una institución sostenible, líder en la formación
                    técnico-profesional integral, basada en el sistema
                    preventivo Salesiano enfocado en los jóvenes más
                    necesitados.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionales para ocultar la barra de desplazamiento pero mantener la funcionalidad */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Nosotros;
