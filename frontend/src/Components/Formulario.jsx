import Header from "./Header";
import Footer from "./Footer";
import { TiArrowSortedDown } from "react-icons/ti";

const Formulario = () => {
  return (
    <>
      <section className="bg-red-400 w*-full h-auto flex   flex-col capitalize">
        <Header />

        <form
          action=""
          className="flex flex-col items-center justify-center w-full h-full pt-8  pb-5 bg-[url(..\src\assets\Carreras\fondo_form_7.png)] bg-cover "
        >
          <div className=" capitalize flex flex-col justify-center items-center w-full gap-3">
            <h1 className="text-3xl font-semibold">
              formulario de inscripción
            </h1>
            <h1 className="text-3xl">llena el formulario con tus datos</h1>
          </div>

          <div className="flex flex-col  w-full justify-between p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Fecha</label>
                <input
                  type="date"
                  className="border border-gray-600 rounded p-2 bg-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Taller en el que Desea Inscribirse
                </label>
                <div className="flex flex-row  relative border border-gray-600 rounded p-2 bg-white ">
                  <select className=" appearance-none w-full focus:outline-none">
                    <option>Seleccione un taller</option>
                    <option>Operador y reparador de computadoras</option>
                    <option>redes cisco computación</option>
                    <option>electricidad industrial y domiciliar</option>
                    <option>soldadura industrial</option>
                    <option>estructuras metálicas livianas</option>
                    <option>carpintería</option>
                    <option>MECANICA DE TORNO Y FRESADORA</option>
                    <option>mecánica de motocicletas</option>
                    <option>academia de música</option>
                    <option> academia de inglés</option>
                    <option> Programación y desarrollo de software</option>
                    <option> paneles Solares</option>
                  </select>

                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <TiArrowSortedDown />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Estudiante de Primer o Segundo Año
                </label>
                <select className="border border-gray-600 rounded p-2">
                  <option>Primer año</option>
                  <option>Segundo año</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Plan en el que desea Inscribirse
                </label>
                <select className="border border-gray-600 rounded p-2">
                  <option>Diario</option>
                  <option>Sabatino</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </section>
    </>
  );
};
export default Formulario;
