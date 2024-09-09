import Projectcard from "./Projectcard.jsx";
import Dictionaryapp from "./assets/Dictionaryapp.png";
import Weatherapp from "./assets/Weatherapp.png";
import Onlineresume from "./assets/Onlineresume.png";
import Amazonuiclone from "./assets/Amazonuiclone.png";
import Todoapp from "./assets/Todoapp.png";
import Portfolio from "./assets/Portfolio Website.png";
import kyakhanahaiImage from "./assets/kyakhanahaiImage.png";
import "./index.css";
import "./CustomCursor.css";

export default function Projects({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-yellow-600" : "bg-kindOfLavender"
      } min-h-screen py-20 flex flex-wrap justify-center gap-4`}
    >
      {/* A card element starts from here */}
      <Projectcard
        imgSource={kyakhanahaiImage}
        githubLink={"https://github.com/Kashyap2210/kyakhanahai_frontend"}
        demoLink={"https://kyakhanahai-frontend.onrender.com"}
        description={"MERN Stack Website for food suggestions."}
        isDarkMode={isDarkMode}
      />
      <Projectcard
        imgSource={Dictionaryapp}
        githubLink={
          "https://github.com/Kashyap2210/Dictionary-App-In-HTML-CSS-JS"
        }
        demoLink={
          "https://kashyap2210.github.io/Dictionary-App-In-HTML-CSS-JS/"
        }
        description={"Dictionary app made using HTML, CSS, JavaScript"}
        isDarkMode={isDarkMode}
      />
      {/* A card element ends here */}
      <Projectcard
        imgSource={Weatherapp}
        githubLink={"https://github.com/Kashyap2210/Weather-App-In-HTML-CSS-JS"}
        demoLink={" https://kashyap2210.github.io/Weather-App-In-HTML-CSS-JS/"}
        description={"Weather app made using HTML, CSS, JavaScript"}
        isDarkMode={isDarkMode}
      />

      <Projectcard
        imgSource={Onlineresume}
        githubLink={"https://github.com/Kashyap2210/Kashyap_Solanki_Resume"}
        demoLink={"https://kashyap2210.github.io/Kashyap_Solanki_Resume/"}
        description={"Online Resume made using HTML & CSS"}
        isDarkMode={isDarkMode}
      />

      <Projectcard
        imgSource={Amazonuiclone}
        githubLink={"https://github.com/Kashyap2210/Amazon-UI-Clone"}
        demoLink={"https://kashyap2210.github.io/Amazon-UI-Clone/"}
        description={"Amazon UI Clone made using HTML & CSS"}
        isDarkMode={isDarkMode}
      />

      <Projectcard
        imgSource={Todoapp}
        githubLink={"https://github.com/Kashyap2210/To-Do-App"}
        demoLink={"https://kashyap2210.github.io/To-Do-App/"}
        description={"To do made using HTML & CSS"}
        isDarkMode={isDarkMode}
      />
      <Projectcard
        imgSource={Portfolio}
        githubLink={"https://github.com/Kashyap2210/Portfolio-Website"}
        demoLink={" https://kashyap2210.github.io/Portfolio-Website/"}
        description={"Portfolio Website Made Using ReactJS & Tailwind"}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
