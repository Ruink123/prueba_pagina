import React, { useState, useEffect } from "react";
import fondo from "../assets/vidaCfp/fondo1.jpg";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { newsData } from "../data/vidaCfp";
import { Link } from "react-router-dom";

const VidaCFP = () => {
  const [index, setIndex] = useState(0);

  // Cambia el título cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % newsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Flechas manuales
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % newsData.length);
  };

  return (
    <>
      <div
        className="w-full relative pt-2"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center text-5xl flex-col items-center gap-2 font-bold">
          <h1 className="text-white">
            VIDA EN <span className="text-[#eb3502]">CFP</span>
          </h1>
          <FaRegNewspaper className="ml-4 text-white" />
        </div>
      </div>
      <div className="w-full bg-[#eb572a]  text-white flex items-center">
        <div className="bg-[#232323] py-2 px-4">
          <span className="font-medium">Lo más Trending</span>
        </div>
        <div className="flex-1 px-4 py-2 overflow-hidden whitespace-nowrap ml-2">
          <span className="font-normal transition-all duration-500">
            {newsData[index].title}
          </span>
        </div>
        <div className="flex font-bolt">
          <button
            className="px-2 py-2 hover:bg-[#eb3502] transition-colors border-r border-[#eb3502]"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            <IoIosArrowBack />
          </button>
          <button
            className="px-2 py-2 hover:bg-[#eb3502] transition-colors"
            onClick={handleNext}
            aria-label="Siguiente"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {news.date} (Por: {news.author})
              </p>
              <p className="text-sm text-gray-700 mb-4">{news.description}</p>
              <Link
                to={`/noticia/${news.id}`}
                className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
              >
                Leer Más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VidaCFP;