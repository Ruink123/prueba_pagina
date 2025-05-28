import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ setVista, vistaActiva }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white md:py-4">
      <div className="w-full md:max-w-7xl mx-auto px-2 md:px-8 flex justify-center">
        <nav className="relative flex items-center w-full justify-between h-20 md:h-auto gap-2 xs:gap-4">
          {" "}
          {/* Logo con margen izquierdo */}
          <div className="flex items-center flex-shrink-0 ml-2 xs:ml-4 sm:ml-6">
            <img
              src="https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/logo-sin-fondo.png"
              alt="CFP Logo"
              className="h-12 max-w-[110px] xs:h-14 xs:max-w-[140px] md:h-24 md:max-w-none"
              style={{ background: "transparent" }}
            />
          </div>
          {/* Botón hamburguesa en la esquina superior derecha */}
          <button
            className="md:hidden absolute right-2 top-4 xs:right-4 sm:right-6 z-50 transition-transform duration-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`inline-block transition-transform duration-500 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {menuOpen ? (
                <FaTimes size={32} color="#3f59ac" />
              ) : (
                <FaBars size={32} color="#3f59ac" />
              )}
            </span>
          </button>
          {/* Menú */}
          <ul
            className={`
              bg-[#3f59ac] rounded-sm flex-1 transition-all
              md:flex md:flex-row md:h-24 md:items-center md:pl-8 md:pr-4 md:justify-around
              ${
                menuOpen
                  ? "flex flex-col items-center gap-4 py-6 absolute top-20 left-0 w-full z-40"
                  : "hidden"
              }
              md:static
              md:w-auto
            `}
            style={
              menuOpen
                ? {
                    position: "absolute",
                    top: "80px", // igual a h-20
                    left: 0,
                    width: "100%",
                    zIndex: 40,
                  }
                : {}
            }
          >
            <li>
              <button
                onClick={() => setVista("inicio")}
                className={`flex items-center justify-center flex-1 h-10 px-4 rounded-lg text-lg transition-all duration-200 ${
                  vistaActiva === "inicio"
                    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                    : "text-white hover:bg-white hover:text-[#3f59ac]"
                }`}
              >
                Inicio
              </button>
            </li>
            <li className="md:border-l border-white md:ml-4 md:pl-4">
              <button
                onClick={() => setVista("nosotros")}
                className={`flex items-center justify-center flex-1 h-10 px-4 rounded-lg text-lg transition-all duration-200 ${
                  vistaActiva === "nosotros"
                    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                    : "text-white hover:bg-white hover:text-[#3f59ac]"
                }`}
              >
                Nosotros
              </button>
            </li>
            <li className="md:border-l border-white md:ml-4 md:pl-4 vida-cfp-width sm:w-36">
              <button
                onClick={() => setVista("vidacfp")}
                className={`flex items-center justify-center flex-1 h-10 px-4 rounded-lg text-lg transition-all duration-200 ${
                  vistaActiva === "vidacfp"
                    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                    : "text-white hover:bg-white hover:text-[#3f59ac]"
                }`}
              >
                Vida en CFP
              </button>
            </li>
            <li className="md:border-l border-white md:ml-4 md:pl-4 vida-cfp-width">
              <button
                onClick={() => setVista("enlaces")}
                className={`flex items-center justify-center flex-1 h-10 px-4 rounded-lg text-lg transition-all duration-200 ${
                  vistaActiva === "enlaces"
                    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                    : "text-white hover:bg-white hover:text-[#3f59ac]"
                }`}
              >
                Enlaces
              </button>
            </li>
            <li className="md:border-l border-white md:ml-4 md:pl-4 vida-cfp-width">
              <button
                onClick={() => setVista("rifa")}
                className={`flex items-center justify-center flex-1 h-10 px-4 rounded-lg text-lg transition-all duration-200 ${
                  vistaActiva === "rifa"
                    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                    : "text-white hover:bg-white hover:text-[#3f59ac]"
                }`}
              >
                Rifa
              </button>
            </li>
            <li className="md:border-l border-white md:ml-4 md:pl-4 vida-cfp-width">
              <button
                onClick={() => setVista("contacto")}
                className={`flex items-center justify-center flex-1 h-10 px-4 rounded-lg text-lg transition-all duration-200 ${
                  vistaActiva === "contacto"
                    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                    : "text-white "
                }`}
              >
                Contacto
              </button>
            </li>
            <li className="md:border-l border-white md:ml-4 md:pl-4 vida-cfp-width relative">
              <button
                onClick={() => setVista("DonaHoy")}
                className={`relative group w-full ${
                  vistaActiva === "DonaHoy"
                    ? "bg-red-600 text-white hover:text-red-600"
                    : "text-white hover:text-[#3f59ac]"
                }`}
                style={{ minWidth: "120px" }}
              >
                {/* Fondo naranja */}
                <span
                  className="absolute left-1 top-1 w-full h-full rounded-sm transition-all duration-200 group-hover:left-0 group-hover:top-0"
                  style={{
                    background: "#ff3c00",
                    zIndex: 0,
                    transform: "rotate(-2deg)",
                  }}
                ></span>
                {/* Fondo amarillo */}
                <span
                  className="absolute left-0 top-0 w-full h-full rounded-sm transition-all duration-200 group-hover:left-1 group-hover:top-1"
                  style={{
                    background: "#ffd25a",
                    zIndex: 1,
                    transform: "rotate(2deg)",
                  }}
                ></span>
                <span
                  className="relative flex items-center justify-center w-auto md:w-32 h-10 font-semibold px-4 py-1 text-base md:group-hover:bg-red-600"
                  style={{
                    color: "#fff",
                    zIndex: 2,
                    fontWeight: 500,
                  }}
                >
                  Dona Hoy
                  <span
                    className="ml-2 text-xl transition-colors duration-200 group-hover:text-white"
                    role="img"
                    aria-label="corazón"
                  >
                    ♥
                  </span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
