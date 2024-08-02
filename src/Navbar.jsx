import { useState, useRef } from "react";
import "./index.css";
import Navbarelements from "./Navbarelements";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./CustomCursor.css";

export default function Navbar({ toggleDarkMode, isDarkMode, refs }) {
  const scrollToSection = (ref, offset = 40) => {
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={` navbar navbar-992 h-20 ${
        isDarkMode ? "bg-lotus_gold text-black" : "bg-navbarColor text-white"
      } flex justify-between items-center text-2xl font-bold sticky top-0 opacity-100`}
    >
      <div className=" text-center">
        <Navbarelements isDarkMode={isDarkMode} title={"@kash_codes"} />
      </div>
      <div className="flex justify-between items-center  pr-8">
        {/* <Navbarelements
          isDarkMode={isDarkMode}
          title={"About"}
          onClick={() => scrollToSection(refs.aboutRef)}
        /> */}
        <section>
          <Navbarelements
            isDarkMode={isDarkMode}
            title={"Skills"}
            onClick={() => {
              scrollToSection(refs.skillsRef);
            }}
          />
        </section>
        <Navbarelements
          isDarkMode={isDarkMode}
          title={"Projects"}
          onClick={() => scrollToSection(refs.projectsRef)}
        />
        <Navbarelements
          isDarkMode={isDarkMode}
          title={"Contact"}
          onClick={() => scrollToSection(refs.messageRef)}
        />
        <Navbarelements
          isDarkMode={isDarkMode}
          title={<DarkModeIcon />}
          onClick={() => {
            toggleDarkMode();
          }}
        />
      </div>
    </div>
  );
}
