import Carrucel from "./Carrucel";
import InformacionGeneral from "./informacionGeneral";
import Carreras from "./carreras";
import Inscripciones from "./Inscripciones";
import BanerDos from "./BanerDos";
import NosotrosInicio from "./NosotrosInicio";
import DonaInicio from "./DonaInicio.jsx";
const Main = () => {
  return (
    <>
      <main className="main">
        <Carrucel />
        <InformacionGeneral />
        <Carreras />
        <BanerDos />
        <NosotrosInicio />
        <DonaInicio />
      </main>
    </>
  );
};

export default Main;
