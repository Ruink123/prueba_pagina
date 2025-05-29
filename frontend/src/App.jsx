import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nosotros from "./Components/Nosotros";
import { useState } from "react";
import VidaCFP from "./Components/VidaCFP";
import Enlaces from "./Components/Enlaces";
import Rifa from "./Components/Rifa";
import DonaHoy from "./Components/DonaHoy";
import Contacto from "./Components/Contacto";
import Inscripciones from "./Components/Inscripciones";
function App() {
  const [vista, setVista] = useState("inicio"); // "inicio" o "nosotros"

  return (
    <>
      <Header setVista={setVista} vistaActiva={vista} />

      {vista === "inicio" ? (
        <>
          <Main />
          <Footer />
        </>
      ) : vista === "nosotros" ? (
        <>
          <Nosotros />
          <Footer />
        </>
      ) : vista === "vidacfp" ? (
        <>
          <VidaCFP />
          <Footer />
        </>
      )
      : vista === "enlaces" ? (
        <>
          <Enlaces />
          <Footer />
        </>
      )
        : vista === "rifa" ? (
        <>
          <Rifa />
          <Footer />
        </>
      )
      : vista === "contacto" ? (
        <>
          <Contacto />
          <Footer />
        </>
      )
      : vista === "DonaHoy" ? (
        <>
          <DonaHoy />
          <Footer  />
        </>
      )
       : vista === "Inscripciones" ? (
        <>
          <Inscripciones />
          <Footer  />
        </>
      )
       : null}
    </>
  )
}

export default App
