import TypewriterText from "./TypeWtriterText";
import banner from "../assets/Rifa/Banner-horizontal.jpg";
import fond from "../assets/Rifa/bckg-6.jpg";
const Rifa = () => {
  return (
    <div className="w-full flex flex-col items-center px-2 sm:px-4 md:px-8 py-8">
      <div className="flex flex-col items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        <h1>Compra tus Tickets para la</h1>
        <h1>GRAN RIFA SALESIANA 2025</h1>
      </div>
      <div className="w-full max-w-full lg:max-w-4xl mx-2 sm:mx-4 md:mx-8 flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-lg p-2 sm:p-4">
        {/* Video */}
        <div className="flex-1 flex items-center justify-center">
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/vrF5YzYmBpA"
            title="Gran Rifa Salesiana 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full max-w-[400px] aspect-video"
            style={{ minHeight: 180 }}
          ></iframe>
        </div>
        {/* Info */}
        <div className="flex-1 flex flex-col justify-center text-base sm:text-lg">
          <p className="mb-2 text-center md:text-left">
            ¡Participa y apoya la educación de jóvenes guatemaltecos! 🙌
          </p>
          <ul className="mb-2 space-y-1">
            <li>
              📅 <b>Sorteo:</b> 26 de octubre 2025
            </li>
            <li>
              🎁 <b>Premios:</b> ¡Un carro, motos!
            </li>
            <li>
              💵 <b>Valor del ticket:</b> Q.20
            </li>
          </ul>
          <div>
            <b>Puntos de Venta</b>
            <ul className="list-disc ml-5 space-y-1">
              <li>📍 CC. Tikal Futura</li>
              <li>📍 Iglesia Divina Providencia (fin de semana)</li>
              <li>📍 Iglesia Don Bosco (fin de semana)</li>
              <li>📍 Librería Loyola, 7 avenida 3-03 zona 1</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Texto efecto máquina */}
      <div
        className="w-full mt-8 py-4 text-center"
        style={{
          backgroundImage: `url(${fond})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#222",
        }}
      >
        <TypewriterText text="¡ Muchas Gracias !" />
      </div>
      <div className="w-full mt-8 ">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Rifa;
