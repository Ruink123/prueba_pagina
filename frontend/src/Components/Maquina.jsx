import React, { useState, useEffect } from "react";

const Maquina = ({ text, speed = 80, pause = 1200 }) => {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, speed / 2);
      } else {
        timeout = setTimeout(() => setTyping(true), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, text, speed, pause]);

  return (
    <span style={{ fontWeight: "bold", fontSize: "26", fontFamily: "inherit" }} className="text-4xl  md:text-6xl lg:text-7xl font-bold text-center lg:text-left flex  justify-center">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};
export default Maquina;