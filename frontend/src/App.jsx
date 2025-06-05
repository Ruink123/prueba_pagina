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
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/vida-cfp" element={<VidaCFP />} />
          <Route path="/enlaces" element={<Enlaces />} />
          <Route path="/rifa" element={<Rifa />} />
          <Route path="/dona-hoy" element={<DonaHoy />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrera/:id" element={<><Inscripciones /> <Footer/></>} />

        </Routes>
    </Router>
    </>
  )
}

export default App
