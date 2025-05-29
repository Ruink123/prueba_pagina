import React, { useEffect, useState } from "react";

// ...existing code...

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span style={{ fontWeight: "bold", fontSize: "1.5rem", fontFamily: "inherit" }}>
      {displayed}
      <span className="animate-pulse">{index < text.length ? "|" : ""}</span>
    </span>
  );
};

export default TypewriterText;