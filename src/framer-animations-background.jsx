import { easeInOut, motion } from "framer-motion";
import html from "./assets/html.png"; // Importing the image

export default function Animated() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Hello This is animated Heading
        <motion.img
          src={html}
          alt="HTML"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <br />
        <br />
      </motion.h1>
    </div>
  );
}
