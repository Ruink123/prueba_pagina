const Enlaces = () => {
  return (
    <div>
      <span
        className="absolute left-0 right-0 top-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          height: "120px", // Más pequeño en móvil
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <span
          className="pt-57 font-extrabold tracking-wider uppercase text-center w-full"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)", // Tamaño responsive con clamp
            color: "#fff",
            opacity: 0.1,
            letterSpacing: "0.08em",
            lineHeight: 1.1,
            textShadow: "0 1px 4px #000",
          }}
        >
          FUNDACIÓN ALBERTO MARVELLI
        </span>
      </span>
      {/* Subtítulo */}
      <span className="flex justify-center text-balck text-base md:text-lg mb-2 font-bolt z-10 px-4 text-center">
        Información de Interés
      </span>
      {/* Título principal - responsive */}
      <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-xl font-extrabold text-black text-center mb-4 md:mb-8 z-10 px-4">
        Enlaces{" "}
      </h1>
    </div>
  );
};

export default Enlaces;
