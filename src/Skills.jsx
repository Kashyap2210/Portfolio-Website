import { useState } from "react";
import "./CustomCursor.css";

import "./index.css";
import Skillcard from "./Skillcard.jsx";
import html from "./assets/html.png"; // Importing the image
import css from "./assets/css.png"; // Importing the image
import Js from "./assets/Js.png"; // Importing the image
import mongodb from "./assets/mongodb.png"; // Importing the image
import expressjs from "./assets/expressjs.png"; // Importing the image
import React from "./assets/React.png"; // Importing the image
import nodejs from "./assets/nodejs.png"; // Importing the image
import bootstrap from "./assets/bootstrap.png"; // Importing the image
import tailwind from "./assets/tailwind.png"; // Importing the image
import redux from "./assets/redux.png"; // Importing the image
import sql from "./assets/sql.jpg"; // Importing the image
// import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

function SamplePrevArrow(props) {
  const { className, style, onClick, isDarkMode } = props;
  const dynamicClass = `${className} sm-devices-arrows`;

  return (
    // <div

    // />
    <ChevronLeftIcon
      className={dynamicClass}
      style={{
        ...style,
        display: "block",
        height: "3rem",
        width: "3rem",
        backgroundColor: isDarkMode ? "rgb(247, 169, 32)" : " #261132",
        borderRadius: "50%",
        textAlign: "center",
        color: isDarkMode ? "black" : "white",
        cursor: "none",
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick, isDarkMode } = props;
  const dynamicClass = `${className} sm-devices-arrows`;

  return (
    // <div

    // />
    <ChevronRightIcon
      className={dynamicClass}
      style={{
        ...style,
        display: "block",
        height: "3rem",
        width: "3rem",
        borderRadius: "50%",
        backgroundColor: isDarkMode ? "rgb(247, 169, 32)" : "#261132",
        cursor: "none",
        textAlign: "center",
        color: isDarkMode ? "black" : "white",
      }}
      onClick={onClick}
    />
  );
}

export default function Skills({ isDarkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow isDarkMode={isDarkMode} />,
    prevArrow: <SamplePrevArrow isDarkMode={isDarkMode} />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "1rem",
          paddingRight: "4rem",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <PanoramaFishEyeIcon
        style={{
          width: "1rem",
          fill: isDarkMode ? "rgb(247, 169, 32)" : "#261132",
          filter: "drop-shadow(0 0 0.5rem #fff)", // Initial shadow effect
          boxShadow: "none", // Ensure box-shadow is none to remove any box shape
          transition: "filter 0.15s ease-in-out", // Smooth transition for the effect
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = isDarkMode
            ? "drop-shadow(0 0 0.5rem #fff) drop-shadow(0 0 0.5rem rgb(247, 169, 32)) drop-shadow(0 0 0.5rem rgb(247, 169, 32))"
            : "drop-shadow(0 0 0.5rem #fff) drop-shadow(0 0 0.5rem #261132) drop-shadow(0 0 0.5rem #261132)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #fff)";
        }}
      >
        {i + 1}
      </PanoramaFishEyeIcon>
    ),
  };
  return (
    // <div className={` ${isDarkMode ? "bg-black text-yellow-600" : "bg-white"}`}>
    <div
      className={` slider-container flex flex-col px-12 h-screen ${
        isDarkMode
          ? "sm-devices-skills bg-black text-lotus_gold"
          : "bg-kindOfLavender sm-devices-skills"
      }`}
    >
      <Slider {...settings} className="my-auto p-8">
        <div>
          <Skillcard imgSource={html} name={"HTML"} isDarkMode={isDarkMode} />
        </div>
        <div>
          <Skillcard imgSource={css} name={"CSS"} isDarkMode={isDarkMode} />
        </div>
        <div>
          <Skillcard
            imgSource={Js}
            name={"JavaScript"}
            isDarkMode={isDarkMode}
          />
        </div>
        <div>
          <Skillcard
            imgSource={mongodb}
            name={"MongoDB"}
            isDarkMode={isDarkMode}
          />
        </div>
        {/* </div> */}
        {/* <div className="flex justify-between"> */}
        <div>
          <Skillcard
            imgSource={expressjs}
            name={"ExpressJS"}
            isDarkMode={isDarkMode}
          />
        </div>
        <div>
          <Skillcard imgSource={React} name={"React"} isDarkMode={isDarkMode} />
        </div>
        <div>
          <Skillcard
            imgSource={nodejs}
            name={"NodeJs"}
            isDarkMode={isDarkMode}
          />
        </div>
        <div>
          <Skillcard
            imgSource={bootstrap}
            name={"Bootstrap"}
            isDarkMode={isDarkMode}
          />
        </div>
        {/* </div> */}
        {/* <div className="flex justify-around"> */}
        <div>
          <Skillcard
            imgSource={tailwind}
            name={"Tailwind"}
            isDarkMode={isDarkMode}
          />
        </div>
        <div>
          <Skillcard imgSource={redux} name={"Redux"} isDarkMode={isDarkMode} />
        </div>
        <div>
          <Skillcard imgSource={sql} name={"SQL"} isDarkMode={isDarkMode} />
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* //{" "} */}
        {/* </div> */}
      </Slider>
    </div>
    // </div>
  );
}
