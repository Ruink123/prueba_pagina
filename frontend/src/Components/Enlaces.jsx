import React, { useRef, useEffect, useState } from "react";
import salesiani from "../assets/Enlaces/salesiani-don-bosco.png";
import CGFMA from "../assets/Enlaces/logo-exsal.png";
import colegio from "../assets/Enlaces/colegio-don-bosco.png";
import Ans from "../assets/Enlaces/agenzia.jpg";
import boletin from "../assets/Enlaces/boletin-salesiano.png";
import fondacione from "../assets/Enlaces/fondazione.png";
import inspectoria from "../assets/Enlaces/inspectoria-salvador.png";
import misiones from "../assets/Enlaces/misiones.svg";

const enlaces = [
  { url: "https://www.sdb.org/", img: salesiani, alt: "Salesiani Don Bosco" },
  { url: "https://www.donboscoexsal.com.gt/", img: CGFMA, alt: "CGFMA" },
  { url: "https://www.donbosco.edu.gt/", img: colegio, alt: "Don Bosco" },
  { url: "https://www.infoans.org/es", img: Ans, alt: "ANS" },
  {
    url: "https://www.boletinsalesiano.info/",
    img: boletin,
    alt: "Boletín Salesiano",
  },
  {
    url: "https://donbosconelmondo.org/",
    img: fondacione,
    alt: "Don Bosco Nel Mondo",
  },
  {
    url: "https://www.salesianoscentroamerica.org/",
    img: inspectoria,
    alt: "Inspectoría CAM",
  },
  {
    url: "https://misionessalesianas.org/",
    img: misiones,
    alt: "Misiones Salesianas",
  },
];

const Enlaces = () => {
  const gridRef = useRef(null);
  const [showLogos, setShowLogos] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowLogos(true);
        }
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <div>
      {/* Fondo de texto superior */}
      <span
        className="absolute left-0 right-0 top-0 flex items-center justify-center pointer-events-none select-none"
        style={{ height: "120px", zIndex: 0 }}
        aria-hidden="true"
      >
        <span
          className="pt-57 font-bold tracking-wider uppercase text-center w-full"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            color: "#000",
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
      <span className="flex justify-center text-black text-base md:text-lg mb-2 font-bold z-10 px-4 text-center">
        Información de Interés
      </span>

      {/* Título principal */}
      <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-4 md:mb-8 z-10 px-4">
        Enlaces
      </h1>

      {/* Fondo + logos */}
      <div
        className="min-h-screen flex flex-col items-center justify-center relative pt-24 pb-8"
        style={{
          background:
            "url('/fondo-textura.jpg') center center / cover no-repeat, #22386b",
        }}
      >
        <div
          ref={gridRef}
          className="relative z-20 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-8"
        >
          {enlaces.map((enlace, idx) => (
            <a
              key={enlace.url}
              href={enlace.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center bg-white/10 border border-white/30 p-4 rounded-lg min-h-[120px]
        transition-all duration-500 ease-out
        ${showLogos ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <img
                src={enlace.img}
                alt={enlace.alt}
                className="max-h-24 max-w-[180px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enlaces;
