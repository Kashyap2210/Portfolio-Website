import "./index.css";
import "./CustomCursor.css";

export default function Navbar({ onClick, title, isDarkMode }) {
  return (
    <div
      className={`ml-20 transition-all duration-150 ${
        isDarkMode ? "" : "hover:text-kindOfLavender"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
