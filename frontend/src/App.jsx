import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nosotros from "./Components/Nosotros";
import { useState } from "react";

function App() {
  const [vista, setVista] = useState("inicio"); // "inicio" o "nosotros"

  return (
    <>
      <Header setVista={setVista} />
      {vista === "inicio" ? (
        <>
          <Main />
          <Footer />
        </>
      ) : vista === "nosotros" ? (
        <Nosotros />
      ) : null}
    </>
  );
}

export default App;
