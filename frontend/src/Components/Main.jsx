import Carrucel from "./Carrucel"
import InformacionGeneral from "./informacionGeneral"
import Carreras from "./carreras"
import Inscripciones from "./Inscripciones"
import BanerDos from "./BanerDos"
const Main = () => {
    return (
        <>
            <main className="main">
                <Carrucel />
                <InformacionGeneral />
                <Carreras />
                <BanerDos />
            </main>

        </>
    )
}

export default Main