import Profile_Picture from "./assets/Profile_picture.png"; // Importing the image
import "./index.css";
import { easeInOut, motion } from "framer-motion";
import "./CustomCursor.css";

export default function Profile_pic() {
  return (
    <div className="sm-devices-profile-pic flex justify-between items-center mx-20">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        src={Profile_Picture}
        className="sm-devices-image h-80 w-80 bg-blue-600 rounded-full object-cover "
        alt="Kashyap Solanki Picture"
      />
    </div>
  );
}
