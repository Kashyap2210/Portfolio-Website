import React from "react";
import "./index.css";
import "./CustomCursor.css";


export default function SkillCard({ imgSource, name, isDarkMode }) {
  return (
    <img
      src={imgSource}
      alt="Logo"
      className={`w-40 h-40 m-auto object-cover rounded-2xl w-32 h-32 rounded-2xl  hover:scale-105 ease-in-out	duration-300 transition duration-300 ease-in-out transform hover:shadow-lg ${
        isDarkMode ? "hover:shadow-yellow-600 bg-white" : "hover:shadow-lightShadow "
      }`}
    />
  );
}
