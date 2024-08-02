import React from "react";
import "./index.css";
import "./CustomCursor.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer({ isDarkMode }) {
  return (
    <div
      className={` h-40 ${
        isDarkMode ? "bg-lotus_gold text-black" : "bg-navbarColor text-white"
      } flex flex-col justify-center items-center transition-all duration-150 cursor-none  `}
    >
      <ul className="cursor-none">
        <li>
          <a
            href="https://www.linkedin.com/in/kashyapsolanki2210/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "sm-devices-footer-line-1"
                : "hover:text-kindOfLavender sm-devices-footer-line-1"
            } transition-all duration-150 cursor-none`}
          >
            <LinkedInIcon
              className={`${
                isDarkMode
                  ? "sm-devices-icon"
                  : "hover:text-kindOfLavender sm-devices-icon"
              } transition-all duration-150 cursor-none`}
            />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kashyap2210?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "sm-devices-footer-line-1"
                : "hover:text-kindOfLavender sm-devices-footer-line-1"
            } transition-all duration-150 cursor-none`}
          >
            <GitHubIcon
              className={`${
                isDarkMode
                  ? "sm-devices-icon"
                  : "hover:text-kindOfLavender sm-devices-icon"
              } transition-all duration-150 cursor-none`}
            />
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kash_codes_/?igsh=MTI4ZXY2OGFwOWFhNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "sm-devices-footer-line-1"
                : "hover:text-kindOfLavender sm-devices-footer-line-1"
            } transition-all duration-150 cursor-none`}
          >
            <InstagramIcon
              className={`${
                isDarkMode
                  ? "sm-devices-icon"
                  : "hover:text-kindOfLavender sm-devices-icon"
              } transition-all duration-150 cursor-none`}
            />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCC7_EltJMddOsGmANSxShCw"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "sm-devices-footer-line-1"
                : "hover:text-kindOfLavender sm-devices-footer-line-1"
            } transition-all duration-150 cursor-none`}
          >
            <YouTubeIcon
              className={`${
                isDarkMode
                  ? "sm-devices-icon"
                  : "hover:text-kindOfLavender sm-devices-icon"
              } transition-all duration-150 cursor-none`}
            />
            Youtube
          </a>
        </li>
      </ul>

      <div
        className={`mt-6 ${
          isDarkMode ? "" : "hover:text-kindOfLavender"
        } transition-all duration-150 cursor-none sm-devices-footer-line-2`}
      >
        Portfolio Website Of Kashyap Solanki Made Using REACT, TAILWIND,
        MATERIAL UI
      </div>
    </div>
  );
}
