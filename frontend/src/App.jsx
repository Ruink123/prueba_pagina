import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nosotros from "./Components/Nosotros";
import VidaCFP from "./Components/VidaCFP";
import Enlaces from "./Components/Enlaces";
import Rifa from "./Components/Rifa";
import DonaHoy from "./Components/DonaHoy";
import Contacto from "./Components/Contacto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import NoticiaCumpleBosco from "./Components/NoticiaCumpleBosco";
import NoticiaFesto from "./Components/NoticiaFesto";
import NoticiaCapilla from "./Components/NoticiaCapilla";
import NoticiaReliquia from "./Components/NoticiaReliquia";
import NoticiaZoom from "./Components/NoticiaZoom";
import Inscripciones from "./Components/Inscripciones";
import Formulario from "./Components/Formulario";
import Inscripcion2025 from "./Components/inscripciones2025";
import Carrera_Tecnica from "./Components/carrera_Tecnica";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/nosotros"
          element={
            <>
              <Nosotros />
              <Footer />
            </>
          }
        />
        <Route
          path="/vida-cfp"
          element={
            <>
              <VidaCFP />
              <Footer />
            </>
          }
        />
        <Route
          path="/enlaces"
          element={
            <>
              <Enlaces />
              <Footer />
            </>
          }
        />
        <Route
          path="/rifa"
          element={
            <>
              <Rifa />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <Contacto />
              <Footer />
            </>
          }
        />
        <Route
          path="/donahoy"
          element={
            <>
              <DonaHoy />
              <Footer />
            </>
          }
        />
        <Route
          path="/noticia/207_CUMPLEAÑOS_DE_SAN_JUAN_BOSCO"
          element={
            <>
              <NoticiaCumpleBosco />
              <Footer />
            </>
          }
        />
        <Route
          path="/noticia/PARTICIPACIÓN_DE_JÓVENES"
          element={
            <>
              <NoticiaFesto />
              <Footer />
            </>
          }
        />
        <Route
          path="/noticia/LA_CAPILLA_PINARDI_DEL_CENTRO_DE_FORMACION_PROFESIONAL_P._BARTOLOME AMBROSIO"
          element={
            <>
              <NoticiaCapilla />
              <Footer />
            </>
          }
        />
        <Route
          path="/noticia/LAS_RELIQUIAS_DEL_CENTRO_DE_FORMACION_PROFESIONAL_P._BARTOLOME_AMBROSIO_SDB"
          element={
            <>
              <NoticiaReliquia />
              <Footer />
            </>
          }
        />
        <Route
          path="/noticia/BUENOS_DÍAS_EN_EL_CFP:_UN_EXALUMNO_SALESIANO_AGRADECIDO"
          element={
            <>
              <NoticiaZoom />
              <Footer />
            </>
          }

        />
        <Route path="/carrera/:id" element={
          <>
            <Inscripciones />
            <Footer />
          </>
        } />

        <Route path="/formulario-inscripcion" element={
          <>
            <Formulario />
            <Footer />
          </>
        } />

        <Route path="/inscripciones2025" element={
          <>
            <Inscripcion2025 />
          </>
        } />

        <Route path="/carrera-tecnica" element={
          <>
            <Carrera_Tecnica />
          </>
        } />

        <Route
          path="*"
          element={
            <>
              <Error />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
