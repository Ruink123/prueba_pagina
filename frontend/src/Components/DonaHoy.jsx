import banner from "../assets/Donar/Banner.jpg";
import donar from "../assets/Donar/foto-donaciones.png";
import TypewriterText from "./TypeWtriterText";
import donate from "../assets/Donar/donate_box.png";

const DonaHoy = () => {
  return (
    <div>
      <div className="w-full flex justify-center my-4">
        <img
          src={banner}
          alt="Banner Fondo de Becas"
          className="w-full max-w-6xl rounded-lg object-cover"
          style={{ minHeight: 120 }}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 bg-[#f5dda6]">
        <h1 className="text-4xl">
          {" "}
          <span className="text-[#ea562b]">Donemos Hoy y Ayudemos</span>{" "}
          <span className="text-[#4055b3]">a Nuestros Jóvenes</span>
        </h1>
        <p className="text-lg text-center mt-4 max-w-2xl">
          Gracias a tu apoyo, cientos de jóvenes pueden aplicar a una{" "}
          <strong>Beca Educativa</strong> que les permitirá estudiar una Carrera
          Técnica Diplomada.
          <strong>
            {" "}
            Sus oportunidades de trabajo serán mejores. ¡Apoya hoy la Obra de
            Fundación Alberto Marvelli!
          </strong>
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch max-w-6xl mx-auto bg-[#fafafa] py-10 px-2 rounded-lg shadow-lg">
        {/* Formulario */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
            HAZ TU DONATIVO
          </h2>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nombre (*)"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico (*)"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Teléfono (*)"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              required
            />
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              {/* Forma de ayuda */}
              <div className="flex-1">
                <label className="font-bold mb-1 block">
                  Forma de Ayuda <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-1">
                  <label>
                    <input type="radio" name="ayuda" required /> Efectivo
                  </label>
                  <label>
                    <input type="radio" name="ayuda" /> Cheque
                  </label>
                  <label>
                    <input type="radio" name="ayuda" /> Tarjeta de Crédito
                  </label>
                  <label>
                    <input type="radio" name="ayuda" /> Otro
                  </label>
                </div>
              </div>
              {/* Recurrencia */}
              <div className="flex-1">
                <label className="font-bold mb-1 block">
                  Recurrencia <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-1">
                  <label>
                    <input type="radio" name="recurrencia" required /> Mensual
                  </label>
                  <label>
                    <input type="radio" name="recurrencia" /> Anual
                  </label>
                  <label>
                    <input type="radio" name="recurrencia" /> Eventual
                  </label>
                  <label>
                    <input type="radio" name="recurrencia" /> Otro
                  </label>
                </div>
              </div>
              {/* Cantidad */}
              <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="cantidad" required />
                  <span>Q100</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="cantidad" />
                  <span>Q300</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="cantidad" />
                  <span>Q1,500 (Beca Completa)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="cantidad" />
                  <span>Otro</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#f15a29] text-white font-bold py-2 rounded mt-4 hover:bg-[#d94e1f] transition"
            >
              ENVIAR
            </button>
          </form>
          <p className="text-black text-base mt-6 font-semibold text-center md:text-left">
            AL INGRESAR TUS DATOS, UN REPRESENTANTE DEL CFP BARTOLOMÉ AMBROSIO
            SDB, SE PONDRÁ EN CONTACTO CONTIGO PARA BRINDARTE MÁS INFORMACIÓN.
          </p>
        </div>
        {/* Imagen */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          {
            <img
              src={donar}
              alt="Jóvenes beneficiados"
              className="w-full max-w-md rounded-[90px] md:rounded-[120px] object-cover"
              style={{ aspectRatio: "1.2/1" }}
            />
          }
        </div>
      </div>
      <div className="w-full mt-8 py-4 text-center  bg-[#f5dda6]">
        <TypewriterText text="¡ Muchas Gracias por tu Donativo"  />
      </div>
      <br />
      <div className="w-full flex flex-col md:flex-row items-center justify-center bg-[#f5dda6] py-10 mb-6 rounded-lg ">
  <div className="flex-1 flex flex-col items-center md:items-end px-4">
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#ea562b] text-center md:text-right leading-tight">
      TU AYUDA HACE<br />LA DIFERENCIA
    </h2>
    <h3 className="text-xl md:text-2xl font-extrabold text-[#4055b3] text-center md:text-right mt-2 leading-tight">
      EN EL FUTURO DE<br />NUESTROS<br />JÓVENES
    </h3>
  </div>
  <div className="flex-1 flex justify-center mt-6 md:mt-0 px-4">
    <img
      src={donate}
      alt="Donar"
      className="w-64 max-w-full"
      style={{ minWidth: 200 }}
    />
  </div>
</div>
    </div>
  );
};

export default DonaHoy;
