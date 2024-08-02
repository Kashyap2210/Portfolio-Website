import "./index.css";
import Profile_pic from "./Profile_pic.jsx";
import Lhsintroduction from "./Lhsintroduction.jsx";
import "./CustomCursor.css";

export default function Introdusction({ isDarkMode }) {
  return (
    <div
      className={`introduction h-screen ${
        isDarkMode ? "bg-black text-yellow-600" : "bg-kindOfLavender"
      } flex items-center justify-between`}
    >
      <div className="w-2/5 sm-devices-profile-pic">
        <Profile_pic />
      </div>
      <div className="w-3/5 lhs-intro">
        <Lhsintroduction isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
