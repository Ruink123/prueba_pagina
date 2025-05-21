const Header = () => {
  return (
    <header className="bg-white py-4   flex items-center justify-center w-auto ">
      <nav className="flex-1  flex justify-center  w-full ">
        <div className="flex items-center">
          <img
            src="https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/logo-sin-fondo.png"
            alt="CFP Logo"
            className="h-24 mr-6 "
          />
        </div>
        <ul className="flex bg-[#3f59ac] w-4xl rounded-sm h-24 items-center pl-8 pr-4">
          <li>
            <a
              href="#"
              className="flex items-center h-10 px-8 bg-red-600 text-white font-bold rounded-lg text-lg shadow transition-all duration-200"
              style={{ textTransform: "lowercase" }}
            >
              inicio
            </a>
          </li>
          <span className="mx-4 h-8 border-r border-white"></span>
          <li>
            <a
              href="#"
              className="text-white px-4 text-lg font-semibold hover:underline"
            >
              Nosotros
            </a>
          </li>
          <span className="mx-4 h-8 border-r border-white"></span>
          <li>
            <a
              href="#"
              className="text-white px-4 text-lg font-semibold hover:underline"
            >
              Vida en CFP
            </a>
          </li>
          <span className="mx-4 h-8 border-r border-white"></span>
          <li>
            <a
              href="#"
              className="text-white px-4 text-lg font-semibold hover:underline"
            >
              Enlaces
            </a>
          </li>
          <span className="mx-4 h-8 border-r border-white"></span>
          <li>
            <a
              href="#"
              className="text-white px-4 text-lg font-semibold hover:underline"
            >
              Contacto
            </a>
          </li>
          <li className="ml-6 relative group " style={{ minWidth: 120 }}>
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
              className="absolute left-0 top-0 w-full h-full rounded-sm transition-all duration-200 group-hover:left-1 group-hover:top-1 group-hover:text-red-600"
              style={{
                background: "#ffd25a",
                zIndex: 1,
                transform: "rotate(2deg)",
              }}
            ></span>
            <a
              href="#"
              className="relative flex items-center justify-center font-semibold px-4 py-1 text-base group-hover:text-red-600"
              style={{
                color: "#fff",
                zIndex: 2,
                fontWeight: 500,
              }}
            >
              Dona Hoy
              <span
                className="ml-2 text-xl transition-colors duration-200 group-hover:text-red-600"
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
