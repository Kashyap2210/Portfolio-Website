import React, { useEffect, useRef } from "react";
import "./index.css";
import Typed from "typed.js";
import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
import "./CustomCursor.css";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

export default function Lhsintroduction({ isDarkMode }) {
  const goToGithub = () => {
    window.open("https://github.com/Kashyap2210");
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "&nbsp; Moto Vlogger &amp;&nbsp;&nbsp;",
        "&nbsp; Video Editor! &nbsp;",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "Kashyap_Solanki_Resume.pdf";
    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Kashyap_Solanki_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error downloading resume:", error));
  };

  return (
    <div
      className={` w-100 h-80 mx-20 text-4xl  cursor-none text-justify App ${
        isDarkMode ? "bg-black text-lotus_gold" : ""
      }`}
    >
      <p className="sm-devices-font-size text-4xl">
        I am a Mechanical Engineering graduate transitioning into web
        development, while also being&nbsp;
        <br />
        <br />
        <span className="mt-20">
          <span
            ref={el}
            className={`sm-devices-typed-js mt-20 typed-text text-5xl ${
              isDarkMode
                ? "bg-lotus_gold text-black rounded	"
                : "bg-navbarColor text-white rounded"
            }`}
          ></span>
        </span>
      </p>

      <Button
        variant="contained"
        className="sm-devices-button overlapping-buttons"
        style={{
          backgroundColor: isDarkMode ? "#f7a920" : "#261132",
          color: isDarkMode ? "black" : "white",
          paddingInline: "1rem",
          transition: "transform 0.3s, box-shadow 0.3s",
          marginTop: "2rem",
          // width: "12rem",
          cursor: "none",
        }}
        onClick={handleDownloadResume}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = isDarkMode ? "#f7a920" : "#261132";
          e.target.style.color = isDarkMode ? "black" : "white";
          e.target.style.boxShadow = isDarkMode
            ? "0 4px 8px #f7a920"
            : "0 4px 8px #B84A62";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = isDarkMode ? "#f7a920" : "#261132";
          e.target.style.color = isDarkMode ? "black" : "white";
          e.target.style.boxShadow = "none";
          e.target.style.transform = "scale(1)";
        }}
      >
        Download Resume
      </Button>

      <Button
        variant="contained"
        className="sm-devices-button overlapping-buttons"
        style={{
          backgroundColor: isDarkMode ? "#f7a920" : "#261132",
          color: isDarkMode ? "black" : "white",
          paddingInline: "1rem",
          transition: "transform 0.3s, box-shadow 0.3s",
          // marginLeft: "2rem",
          marginTop: "2rem",
          // width: "12rem",
          cursor: "none",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = isDarkMode ? "#f7a920" : "#261132";
          e.target.style.color = isDarkMode ? "black" : "white";
          e.target.style.boxShadow = isDarkMode
            ? "0 4px 8px #f7a920"
            : "0 4px 8px #B84A62";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = isDarkMode ? "#f7a920" : "#261132";
          e.target.style.color = isDarkMode ? "black" : "white";
          e.target.style.boxShadow = "none";
          e.target.style.transform = "scale(1)";
        }}
        onClick={goToGithub}
      >
        View Github
      </Button>
    </div>
  );
}
