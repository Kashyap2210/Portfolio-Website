import { useState, useRef } from "react";
import "./index.css";
import Introduction from "./Introduction.jsx";
import Navbar from "./Navbar.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";
import Messagesection from "./Messagesection.jsx";
import CustomCursor from "./Customcursor.jsx";
import "./CustomCursor.css";
// import Button from "@mui/material/Button";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function Mainpage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const messageRef = useRef(null);
  const introductionRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CustomCursor isDarkMode={isDarkMode} />
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        refs={{ introductionRef, skillsRef, projectsRef, aboutRef, messageRef }}
      />
      <CustomCursor />
      <section ref={introductionRef}>
        <Introduction isDarkMode={isDarkMode} />
      </section>
      <section ref={skillsRef}>
        <Skills isDarkMode={isDarkMode} />
      </section>
      <section ref={projectsRef}>
        <Projects isDarkMode={isDarkMode} />
      </section>
      <section ref={messageRef}>
        <Messagesection isDarkMode={isDarkMode} />
      </section>
      <Footer isDarkMode={isDarkMode} />

      <button
        className={
          isDarkMode
            ? "fixed-navigation-button-dark sm-scrollToTop"
            : "fixed-navigation-button sm-scrollToTop"
        }
        onClick={scrollToTop}
      >
        <NavigationIcon />
      </button>
    </>
  );
}
