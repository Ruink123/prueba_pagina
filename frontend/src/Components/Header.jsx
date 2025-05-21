import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // al inicio del archivo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 flex items-center justify-center w-auto">
      <nav className="flex-1 flex justify-center w-full list-none relative">
        <div className="flex items-center">
          <img
            src="https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/logo-sin-fondo.png"
            alt="CFP Logo"
            className="h-24 mr-6"
          />
        </div>
        {/* Botón hamburguesa solo visible en pantallas pequeñas */}
        <button
          className="md:hidden absolute right-4 top-6 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`inline-block transition-transform duration-500 ease-in-out ${
              menuOpen ? "rotate-180" : "rotate-0"
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
    bg-[#3f59ac] rounded-sm
    md:flex md:flex-row md:h-24 md:items-center md:pl-8 md:pr-4
    ${
      menuOpen
        ? "flex flex-col items-center gap-4 py-6 absolute top-24 left-0 w-full z-40"
        : "hidden"
    }
    md:static
  `}
        >
          <li
            className="flex items-center h-10 w-full md:w-auto justify-center"
            style={{ minWidth: 120 }}
          >
            <a
              href="#"
              className="flex items-center justify-center w-32 h-10 px-4 bg-red-600 text-white rounded-lg text-lg shadow transition-all duration-200 hover:bg-amber-200 hover:text-black"
              style={{ textTransform: "lowercase" }}
            >
              inicio
            </a>
          </li>
          <li
            className="flex items-center h-10 w-full md:w-auto justify-center md:border-l border-white md:ml-4 md:pl-4"
            style={{ minWidth: 120 }}
          >
            <a
              href="#"
              className="flex items-center justify-center w-32 h-10 px-4 text-white rounded-lg text-lg shadow transition-all duration-200 hover:bg-amber-200 hover:text-black"
            >
              Nosotros
            </a>
          </li>
          <li
            className="flex items-center h-10 w-full md:w-auto justify-center md:border-l border-white md:ml-4 md:pl-4"
            style={{ minWidth: 120 }}
          >
            <a
              href="#"
              className="flex items-center justify-center w-32 h-10 px-4 text-white rounded-lg text-lg shadow transition-all duration-200 hover:bg-amber-200 hover:text-black"
            >
              Vida en CFP
            </a>
          </li>
          <li
            className="flex items-center h-10 w-full md:w-auto justify-center md:border-l border-white md:ml-4 md:pl-4"
            style={{ minWidth: 120 }}
          >
            <a
              href="#"
              className="flex items-center justify-center w-32 h-10 px-4 text-white rounded-lg text-lg shadow transition-all duration-200 hover:bg-amber-200 hover:text-black"
            >
              Enlaces
            </a>
          </li>
          <li
            className="flex items-center h-10 w-full md:w-auto justify-center md:border-l border-white md:ml-4 md:pl-4"
            style={{ minWidth: 120 }}
          >
            <a
              href="#"
              className="flex items-center justify-center w-32 h-10 px-4 text-white rounded-lg text-lg shadow transition-all duration-200 hover:bg-amber-200 hover:text-black"
            >
              Contacto
            </a>
          </li>
          <li
            className="relative group flex items-center h-10 w-auto md:w-auto justify-center md:ml-4 md:pl-4"
            style={{ minWidth: 120 }}
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
            <a
              href="#"
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
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
