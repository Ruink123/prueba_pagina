import { useNavigate } from "react-router-dom";
import fondo from "../assets/vidaCfp/fondoe.jpg";
import foto1 from "../assets/vidaCfp/capilla.jpeg";
import foto2 from "../assets/vidaCfp/capilla2.jpeg";
import foto3 from "../assets/vidaCfp/auxiliadora.jpeg";
import foto4 from "../assets/vidaCfp/donbosco.jpeg";

const NoticiaCapilla = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center gap-4 py-10"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-3xl   mx-auto mt-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          LA CAPILLA PINARDI DEL CENTRO DE FORMACION PROFESIONAL P. BARTOLOME
          AMBROSIO
        </h1>
        <p className="italic text-lg text-center mb-6 font-semibold">
          Julio 2022 (Por: Patty Castillo)
        </p>
        <p className="mb-4 text-justify">
          En el Centro de Formación, se encuentra la Capilla Pinardi, un lugar
          privilegiado en donde sus jóvenes alumnos, bienhechores, exalumnos y
          amigos de su obra, se encuentran con el Resucitado.
        </p>
        <p className="mb-4 text-justify">
          La Capilla Pinardi, en sus inicios el espacio que ocupa fue utilizado
          como: bodega y dirección, clínica médica, habitación de huéspedes,
          tienda, sala de reuniones y salón de clases. Muchos han sido sus usos,
          sin embargo, no fue sino hasta el año 2010 en que se convirtió en
          pequeño recinto de oración, modestamente decorado con flores
          naturales, la imagen de Don Bosco y María Auxiliadora y unas cuantas
          sillas plásticas permitían un momento de oración. No fue sino hasta el
          año 2012 donde se planteó formalmente la posibilidad de realizar la
          capilla, dándole una consistencia formal de lo que se deseaba y de
          conformidad al buen criterio del arquitecto a quien se le encomendó la
          obra.
        </p>
        <p className="text-justify">
          Dentro de la capilla se encuentran elementos por demás significativos
          y que nos permitimos compartir, entre ellos un bello vitral que
          replica la pintura original de la capilla Pinardi, vitral donado por
          una familia de profunda raigambres salesianas, la imagen de María
          Auxiliadora que viajó desde el viejo mundo como obsequio del sucesor
          de Don Bosco, Don Pascual Chávez, los bellos y elaborados vasos
          sagrados y las ornamentas sacerdotales, obsequio personal de Su
          Eminencia Tarsicio Cardenal Bertone, Jefe de Estado Vaticano.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <img
            src={foto1}
            alt="Celebración 1"
            className="object-cover w-full h-72 aspect-square rounded"
          />
          <img
            src={foto2}
            alt="Celebración 2"
            className="object-cover w-full h-72 aspect-square rounded"
          />
          <img
            src={foto3}
            alt="Celebración 3"
            className="object-cover w-full h-72 aspect-square rounded"
          />
          <div className="col-span-3">
            <img
              src={foto4}
              alt="Celebración 4"
              className="object-cover w-full h-auto rounded"
            />
          </div>
        </div>
        <p className="mb-4 text-justify">
          Es importante resaltar que la estructura arquitectónica de la capilla,
          ha sido respetada conservando la originalidad de sus puertas, ventas y
          techado que fueran colocadas en el año 1928, año de su construcción de
          esta parte antigua del edificio, confiando para ellos tales cuidados a
          las manos hábiles de jóvenes exalumnos salesianos de eta misma obra
          técnica, quienes como en tiempos de Don Bosco han realizado con esmero
          y gran amor las bancas, el altar, la mesa de ofrendas, los pedestales
          de las imágenes y el Sagrario que contiene la sagrada forma
          Eucarística, que recuerda una vez más hacia a quien deseaba llevar Don
          Bosco a los jóvenes.
        </p>
        <br />
        <p className="mb-4 text-justify">
          En la parte inferior de las imágenes de Don Bosco y María Auxiliadora,
          podremos observar dos relicarios elaborados por manos igualmente de
          exalumnos de este centro, quienes con gran habilidad ensamblaron cinco
          maderas guatemaltecas siendo: cedro, caoba, pino guatemalteco, ciprés
          y rosol para contener en cada uno de ellos, los fragmentos preciosos
          de dos personajes que siempre quisieron estar en medio de los jóvenes.
        </p>
        <br />
        <p className="mb-4 text-justify">
          A los pies de Don Bosco una reliquia de primer grado, es decir un
          fragmento óseo del mismo Don Bosco. Reliquia recibida en el mes de
          marzo del año 2012, de manos del Postulador General de la Causa de los
          Santos Don Pierluigi Cameroni SDB.
        </p>
        <br />

        <p className="mb-4 text-justify">
          Por debajo de la imagen de María Auxiliadora, un fragmento de cabello
          del Reverendo Padre Bartolomé Ambrosio SDB, quien desde siempre estuvo
          cerca de los jóvenes y de los exalumnos salesianos. Durante sus
          últimos años de vida el P. Ambrosio, realizó gestiones para obtener la
          nueva edificación del Centro de Formación, que hoy lleva su nombre.
          Como uno de sus últimos gestos de amor a los jóvenes, acudió a la
          Buena Familia que siempre le apoyó para obtener la ayuda necesaria
          requerida en la construcción de esta capilla en la cual él mismo
          permanecerá ahora para siempre y desde donde sin lugar a dudas, nos
          seguirá llevando como Don Bosco al encuentro personal con el
          Resucitado.
        </p>
        <br />

        <p className="mb-4 text-justify">
          Bendición e Inauguración de la Capilla Pinardi del Centro de Formación
          Profesional P. Bartolomé Ambrosio, 8 de diciembre del año 2012.
        </p>

        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => navigate("/vidacfp")}
            class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group "
          >
            <div class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
              <div class="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
            </div>
            <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
            <div class="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
            <div class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
            <div class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
            <div class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
            <div class="relative flex items-center justify-center gap-2">
              <span class="text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
                Volver a VidaCFP
              </span>
            </div>
            <div class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticiaCapilla;
