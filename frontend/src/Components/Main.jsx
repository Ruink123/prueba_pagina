import Carrucel from "./Carrucel"
import InformacionGeneral from "./informacionGeneral"
import Carreras from "./Carreras"
import Inscripciones from "./Inscripciones"
const Main = () => {
    return (
        <main className="main">
            <Carrucel />
            <InformacionGeneral />
            <Carreras />
            <Inscripciones />
        </main>
    )
}

export default Main