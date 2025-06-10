import Header from "./Header";
import Footer from "./Footer";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Formulario = () => {
  const location = useLocation();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Soltero/a");
  const [laboralStatus, setLaboralStatus] = useState("No");
  const [padeceEnfermedad, setPadeceEnfermedad] = useState("Si");
  const [medicamento, setMedicamento] = useState("Si");
  const [alergia, setAlergia] = useState("Si");
  const [otrosCursos, setOtrosCursos] = useState("");
  const [selectedCarrera, setSelectedCarrera] = useState("Seleccione un taller");
  
  // Get the career from URL parameters when component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const carrera = searchParams.get('carrera');
    if (carrera) {
      setSelectedCarrera(carrera);
    }
  }, [location]);

  //marcar el checkbox de términos y condiciones para habilidatr el boton de enviar
  const handleTermsCheckbox = (e) => {
    setIsTermsAccepted(e.target.checked);
  };

  //manejar el cambio de estado de alergia
  const handleAlergiaChange = (e) => {
    setAlergia(e.target.value);
  };

  // Manejar cambio en otros cursos
  const handleOtrosCursosChange = (e) => {
    setOtrosCursos(e.target.value);
  };

  // Manejar cambio en el estado de medicamento
  const handleMedicamentoChange = (e) => {
    setMedicamento(e.target.value);
  };

  // Manejar cambio en el estado de enfermedad
  const handlePadeceEnfermedadChange = (e) => {
    setPadeceEnfermedad(e.target.value);
  };

  // Manejar cambio en el estado civil
  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };

  // Manejar cambio en el estado laboral
  const handleLaboralStatusChange = (e) => {
    setLaboralStatus(e.target.value);
  };

  //obtener la fecha de nacimiento y calcular la edad
  const calculateAge = (birthDateStr) => {
    if (!birthDateStr) return "";

    const birthDate = new Date(birthDateStr);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Si el cumpleaños no ha ocurrido aún este año resta 1 de la edad
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age.toString();
  };

  const handleBirthDateChange = (e) => {
    const dateValue = e.target.value;
    setBirthDate(dateValue);
    setAge(calculateAge(dateValue));
  };
  return (
    <>
      <section className="w-full h-auto flex   flex-col capitalize">
        <Header />

        <form
          action=""
          className="flex flex-col items-center justify-center w-full h-full pt-8  pb-5 bg-[url(..\src\assets\Carreras\fondo_form_7.png)] bg-cover mb-18"
        >
          <div className=" capitalize flex flex-col justify-center items-center w-full gap-3">
            <h1 className="text-3xl font-semibold text-center">
              formulario de inscripción
            </h1>
            <h1 className="text-3xl text-center">
              llena el formulario con tus datos
            </h1>
          </div>

          <div className="flex flex-col  w-full justify-center pt-10  h-auto pl-6 pr-6 ">
            <div className="  p-6  ">
              <div className="flex lg:flex-row gap-18 lg:flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Fecha</label>
                  <input
                    type="date"
                    className="border border-gray-600 rounded p-2 bg-white focus:outline-none"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Taller en el que Desea Inscribirse
                  </label>
                  <div className="flex flex-row  relative border border-gray-600 rounded p-2 bg-white ">
                    <select 
                      className="appearance-none w-full focus:outline-none pl-3"
                      value={selectedCarrera}
                      onChange={(e) => setSelectedCarrera(e.target.value)}
                    >
                      <option>Seleccione un taller</option>
                      <option>Operador y Reparador de Computadoras</option>
                      <option>Redes Cisco Computación</option>
                      <option>Electricidad Industrial y Domiciliar</option>
                      <option>Soldadura Industrial</option>
                      <option>Estructuras Metálicas Livianas</option>
                      <option>Carpintería</option>
                      <option>Mecánica de Torno y Fresado</option>
                      <option>Mecánica de Motocicletas</option>
                      <option>Academia de Música</option>
                      <option>Academia de Inglés</option>
                      <option>Programación y Desarrollo de Software</option>
                      <option>Paneles Solares</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:flex-row gap-18 pt-8 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Estudiante de Primer o Segundo Año
                  </label>
                  <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                    <select className="appearance-none w-full focus:outline-none pl-3">
                      <option>Primer año</option>
                      <option>Segundo año</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Plan en el que desea Inscribirse
                  </label>

                  <div className="flex flex-row  relative border border-gray-600 rounded p-2 bg-white">
                    <select className="appearance-none w-full focus:outline-none pl-3">
                      <option>Diario</option>
                      <option>Sabatino</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full  p-6 h-auto justify-center">
            <div className="flex justify-center text-[#284b70] font-bold text-xl">
              <h1 className="text-center">
                I.- INFORMACION GENERAL DEL ESTUDIANTE :
              </h1>
            </div>

            <div className=" flex flex-col">
              <div className="lg:flex lg:flex-row gap-10 p-6 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">nombres</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">apellidos</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>
              </div>

              <div className="lg:flex lg:flex-row gap-10 p-6 pt-0 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    lugar de nacimiento
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    fecha de nacimiento
                  </label>

                  <input
                    type="date"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="lg:flex lg:flex-row gap-8 p-6 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">direccion actual</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">municipio</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">departamento</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="lg:flex lg:flex-row gap-10 p-6 flex flex-col ">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">No. de DPI</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Edad </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                    value={age}
                    readOnly
                  />
                </div>
              </div>

              <div className="kg:flex lg:flex-row gap-10 p-6 pt-0 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Numero de Hermanos
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Religión que Profesa
                  </label>

                  <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                    <select className="appearance-none w-full focus:outline-none pl-3">
                      <option>Cristiano Católico/a</option>
                      <option>Cristiano Evangélico/a</option>
                      <option>Mormón</option>
                      <option>Testigo de Jehová</option>
                      <option>Otra</option>
                      <option>Ninguna</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col pt-5">
              <div className="flex justify-center font-semibold">
                <p>
                  En caso de ser católico, que sacramentos ha recibido? (Elija
                  todas las opciones que aplique)
                </p>
              </div>

              <div className="md:flex lg:flex-row gap-3 p-6  justify-center pt-3 flex flex-col ">
                <ul className="flex flex-col gap-2 justify-center items-start md:flex-row">
                  <li className="flex flex-row gap-3">
                    <input type="checkbox" />
                    <label className="font-semibold mb-1">Bautizo</label>
                  </li>
                  <li className="flex flex-row gap-3">
                    <input type="checkbox" />
                    <label className="font-semibold mb-1">
                      Primera Comunión
                    </label>
                  </li>
                  <li className="flex flex-row gap-3">
                    <input type="checkbox" />
                    <label className="font-semibold mb-1">Confirmación</label>
                  </li>

                  <li className="flex flex-row gap-3">
                    <input type="checkbox" />
                    <label className="font-semibold mb-1">Matrimonio</label>
                  </li>

                  <li className="flex flex-row gap-3">
                    <input type="checkbox" />
                    <label className="font-semibold mb-1">Ninguno</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="lg.flex lg:flex-row gap-8 p-6 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Número de Teléfono Casa
                  </label>

                  <input
                    type="tel"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Número de Celular
                  </label>

                  <input
                    type="tel"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Número de Teléfono Trabajo
                  </label>

                  <input
                    type="tel"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="lg:flex lg:flex-row gap-10 p-6 pt-1 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Nacionalidad</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Estado Civil</label>

                  <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                    <select
                      className="appearance-none w-full focus:outline-none pl-3"
                      value={maritalStatus}
                      onChange={handleMaritalStatusChange}
                    >
                      <option>Soltero/a</option>
                      <option>Casado/a</option>
                      <option>Viudo/a</option>
                      <option>Unido/a</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="lg:flex lg:flex-row gap-8 p-6 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Nombre de la Madre
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Ocupación</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Lugar donde trabaja
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="lg:flex lg:flex-row gap-8 p-6 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Nombre del Padre</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Ocupación</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Lugar donde trabaja
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="lg:flex lg:flex-row gap-8 p-6 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Actualmente vive con:
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label
                    className={`font-semibold mb-1 ${
                      maritalStatus === "Casado/a" ||
                      maritalStatus === "Unido/a"
                        ? ""
                        : "text-gray-400"
                    }`}
                  >
                    Nombre del Esposo/a
                  </label>

                  <input
                    type="text"
                    className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                      maritalStatus === "Casado/a" ||
                      maritalStatus === "Unido/a"
                        ? "bg-white"
                        : "bg-gray-100 cursor-not-allowed"
                    }`}
                    disabled={
                      maritalStatus !== "Casado/a" &&
                      maritalStatus !== "Unido/a"
                    }
                    placeholder={
                      maritalStatus === "Casado/a" ||
                      maritalStatus === "Unido/a"
                        ? ""
                        : "No aplica"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full  p-6  h-auto justify-center">
            <div className="flex justify-center text-[#284b70] font-bold text-xl">
              <h1 className="text-center">II.- FORMACIÓN ACADÉMICA</h1>
            </div>

            <div className=" flex flex-col ">
              <div className="lg:flex lg:flex-row  gap-10 p-6 pt-5 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Último grado aprobado
                  </label>

                  <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                    <select className="appearance-none w-full focus:outline-none capitalize pl-3">
                      <option>Sexto Primaria</option>
                      <option>Primero básico </option>
                      <option>segundo básico</option>
                      <option>tercero básico</option>
                      <option>diversificado</option>
                      <option>otro</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Año en que lo aprobó
                  </label>

                  <input
                    type="number"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1 ">
                  <label className="font-semibold mb-1 text-center">
                    ¿Ha recibido otros Curso?
                  </label>

                  <div className="flex justify-center gap-2">
                    <input
                      type="radio"
                      id="cursosSi"
                      name="otrosCursos"
                      value="Si"
                      checked={otrosCursos === "Si"}
                      onChange={handleOtrosCursosChange}
                      className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                    />
                    <label htmlFor="cursosSi" className="font-semibold mb-1">
                      Si
                    </label>

                    <input
                      type="radio"
                      id="cursosNo"
                      name="otrosCursos"
                      value="No"
                      checked={otrosCursos === "No"}
                      onChange={handleOtrosCursosChange}
                      className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                    />
                    <label htmlFor="cursosNo" className="font-semibold mb-1">
                      No
                    </label>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label
                    className={`font-semibold mb-1 ${
                      otrosCursos === "Si" ? "" : "text-gray-400"
                    }`}
                  >
                    especifique
                  </label>

                  <input
                    type="text"
                    className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                      otrosCursos === "Si"
                        ? "bg-white"
                        : "bg-gray-100 cursor-not-allowed"
                    }`}
                    disabled={otrosCursos !== "Si"}
                    placeholder={otrosCursos === "Si" ? "" : "No aplica"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full  p-6 h-auto justify-center">
            <div className="flex justify-center text-[#284b70] font-bold text-xl">
              <h1 className="text-center">III.- INFORMACION LABORAL:</h1>
            </div>

            <div className=" flex flex-col">
              <div className="sm:flex sm:flex-row gap-10 p-6 pt-5 flex flex-col ">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    trabaja actualmente
                  </label>

                  <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                    <select
                      className="appearance-none w-full focus:outline-none capitalize pl-3"
                      value={laboralStatus}
                      onChange={handleLaboralStatusChange}
                    >
                      <option>Si</option>
                      <option>No</option>
                    </select>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1.">
                  <label
                    className={`font-semibold mb-1 ${
                      laboralStatus === "Si" ? "" : "text-gray-400"
                    }`}
                  >
                    Nombre de la empresa (si trabajas actualmente)
                  </label>

                  <input
                    type="text"
                    className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                      laboralStatus === "Si"
                        ? "bg-white"
                        : "bg-gray-100 cursor-not-allowed"
                    }`}
                    disabled={laboralStatus !== "Si"}
                    placeholder={laboralStatus === "Si" ? "" : "No aplica"}
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label
                    className={`font-semibold mb-1 ${
                      laboralStatus === "Si" ? "" : "text-gray-400"
                    }`}
                  >
                    ¿Qué puesto desempeñas actualmente?
                  </label>

                  <input
                    type="text"
                    className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                      laboralStatus === "Si"
                        ? "bg-white"
                        : "bg-gray-100 cursor-not-allowed"
                    }`}
                    disabled={laboralStatus !== "Si"}
                    placeholder={laboralStatus === "Si" ? "" : "No aplica"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full  p-6  h-auto justify-center">
            <div className="flex justify-center text-[#284b70] font-bold text-xl">
              <h1>IV. SALUD:</h1>
            </div>

            <div className=" flex flex-col">
              <div className=" flex flex-col">
                <div className="lg:flex lg:flex-row gap-10 p-6 flex flex-col ">
                  <div className="flex flex-col flex-1">
                    <label className="font-semibold mb-1">
                      ¿Padeces alguna enfermedad?
                    </label>

                    <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                      <select
                        className="appearance-none w-full focus:outline-none capitalize pl-3"
                        value={padeceEnfermedad}
                        onChange={handlePadeceEnfermedadChange}
                      >
                        <option>Si</option>
                        <option>no</option>
                      </select>

                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <TiArrowSortedDown />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <label
                      className={`font-semibold mb-1 ${
                        padeceEnfermedad === "Si" ? "" : "text-gray-400"
                      }`}
                    >
                      Especifica
                    </label>

                    <input
                      type="text"
                      className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                        padeceEnfermedad === "Si"
                          ? "bg-white"
                          : "bg-gray-100 cursor-not-allowed"
                      }`}
                      disabled={padeceEnfermedad !== "Si"}
                      placeholder={padeceEnfermedad === "Si" ? "" : "No aplica"}
                    />
                  </div>
                </div>

                <div className="lg:flex lg:flex-row gap-10 p-6 pt-0 flex flex-col">
                  <div className="flex flex-col flex-1">
                    <label className="font-semibold mb-1">
                      ¿Tomas algun medicamento?
                    </label>

                    <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                      <select
                        className="appearance-none w-full focus:outline-none capitalize pl-3"
                        value={medicamento}
                        onChange={handleMedicamentoChange}
                      >
                        <option>Si</option>
                        <option>no</option>
                      </select>

                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <TiArrowSortedDown />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <label
                      className={`font-semibold mb-1 ${
                        medicamento === "Si" ? "" : "text-gray-400"
                      }`}
                    >
                      Especifica
                    </label>

                    <input
                      type="text"
                      className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                        medicamento === "Si"
                          ? "bg-white"
                          : "bg-gray-100 cursor-not-allowed"
                      }`}
                      disabled={medicamento !== "Si"}
                      placeholder={medicamento === "Si" ? "" : "No aplica"}
                    />
                  </div>
                </div>

                <div className="lg:flex lg:flex-row gap-10 p-6 pt-0 flex flex-col">
                  <div className="flex flex-col flex-1">
                    <label className="font-semibold mb-1">
                      ¿Eres alérgico a algun medicamento?
                    </label>

                    <div className="flex flex-row relative border border-gray-600 rounded p-2 bg-white">
                      <select
                        className="appearance-none w-full focus:outline-none capitalize pl-3"
                        value={alergia}
                        onChange={handleAlergiaChange}
                      >
                        <option>Si</option>
                        <option>no</option>
                      </select>

                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <TiArrowSortedDown />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <label
                      className={`font-semibold mb-1 ${
                        alergia === "Si" ? "" : "text-gray-400"
                      }`}
                    >
                      Especifica
                    </label>

                    <input
                      type="text"
                      className={`focus:outline-none relative border border-gray-600 rounded p-2 ${
                        alergia === "Si"
                          ? "bg-white"
                          : "bg-gray-100 cursor-not-allowed"
                      }`}
                      disabled={alergia !== "Si"}
                      placeholder={alergia === "Si" ? "" : "No aplica"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full  p-6  h-auto justify-center">
            <div className="flex justify-center text-[#284b70] font-bold text-xl">
              <h1>V. INTERESES DE CAPACITACION:</h1>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">
                  ¿Qué te motiva a estudiar el curso?{" "}
                </label>

                <input
                  type="text"
                  className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">
                  ¿Tienes experiencia relacionada con el curso que te interesa?
                </label>

                <input
                  type="text"
                  className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">
                  ¿Qué otro curso de los que se imparte en el CFP te interesa?
                </label>

                <input
                  type="text"
                  className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full  p-6  h-auto justify-center">
            <div className="flex justify-center text-[#284b70] font-bold text-xl">
              <h1 className="text-center">INFORMACIÓN ADICIONAL</h1>
            </div>

            <div className=" flex flex-col">
              <div className="lg:flex lg:flex-row gap-10 p-6 pt-5 flex flex-col">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    En caso de emergencia, comunicarse con:
                  </label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">Parentesco</label>

                  <input
                    type="text"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold mb-1">
                    Número de Teléfono
                  </label>

                  <input
                    type="tel"
                    className="focus:outline-none relative border border-gray-600 rounded p-2 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-auto justify-start">
            <div className="flex flex-col justify-start pl-13">
              <div className="flex font-semibold">
                <p>Aceptas la veracidad de los datos del formulario</p>
              </div>
              <div className="flex pb-2 mb-3 items-start w-full pt-5">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 cursor-pointer flex-shrink-0"
                  checked={isTermsAccepted}
                  onChange={handleTermsCheckbox}
                />
                <p
                  className="font-semibold text-base sm:text-lg leading-tight w-full ml-7 sm:ml-8"
                  style={{
                    textAlign: "justify",
                    textIndent: "-1.75rem",
                  }}
                >
                  Estoy consciente de que cualquier dato falso que haya
                  proporcionado en esta ficha, dará derecho al CFP de retirarme
                  del mismo, si lo consideran conveniente.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center w-11/12 h-12 mb-10 text-white font-bold ${
              isTermsAccepted
                ? "bg-[#4055b2] hover:bg-[#ea562b] "
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <button
              className="cursor-pointer w-full h-full"
              disabled={!isTermsAccepted}
            >
              ENVIAR FORMULARIO DE INSCRIPCIÓN
            </button>
          </div>
        </form>

        <Footer />
      </section>
    </>
  );
};
export default Formulario;
