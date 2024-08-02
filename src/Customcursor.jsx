import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

export default function CustomCursor({ isDarkMode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={
        isDarkMode
          ? "custom-cursor-dark sm-devices-cursor cursor"
          : "custom-cursor sm-devices-cursor cursor"
      }
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="cursor-inner"></div>
    </div>
  );
}
