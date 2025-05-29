import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 80, pause = 1200 }) => {
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
    <span style={{ fontWeight: "bold", fontSize: "1.5rem", fontFamily: "inherit" }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};
export default TypewriterText;