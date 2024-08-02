import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import "./index.css";
import { styled } from "@mui/material/styles";
// import Button, { ButtonProps } from '@mui/material/Button';
import "./CustomCursor.css";

const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default function Messagesection({ isDarkMode }) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_API_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });

    // Clear the form after submission
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <form
      className={`h-80% ${
        isDarkMode ? "bg-black text-lotus_gold" : "bg-kindOfLavender"
      }`}
      onSubmit={handleSubmit}
    >
      <div className="sm-devices-textfields flex flex-col items mx-20 py-20">
        <TextField
          id="outlined-name"
          label="Name"
          variant="outlined"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          sx={{ mb: 2 }}
          className={isDarkMode ? "darkmode" : ""}
          InputProps={{
            style: {
              color: isDarkMode ? "#DAA520" : "black",
            },
          }}
          InputLabelProps={{
            style: {
              color: isDarkMode ? "#DAA520" : "black",
            },
          }}
        />
        <TextField
          id="outlined-email"
          label="Email Id"
          variant="outlined"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          sx={{ mb: 2 }}
          className={isDarkMode ? "darkmode" : ""}
          InputProps={{
            style: {
              color: isDarkMode ? "#DAA520" : "black",
            },
          }}
          InputLabelProps={{
            style: {
              color: isDarkMode ? "#DAA520" : "black",
            },
          }}
        />
        <TextField
          id="outlined-message"
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
          className={isDarkMode ? "darkmode" : ""}
          InputProps={{
            style: {
              color: isDarkMode ? "#DAA520" : "black",
            },
          }}
          InputLabelProps={{
            style: {
              color: isDarkMode ? "#DAA520" : "black",
            },
          }}
        />
        <Button
          variant="contained"
          className="sm-devices-button"
          style={{
            backgroundColor: isDarkMode ? "#f7a920" : "#261132",
            color: isDarkMode ? "black" : "white",
            paddingInline: "1rem",
            transition: "transform 0.3s, box-shadow 0.3s",
            width: "25%",
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
          onClick={handleSubmit}
        >
          Send Email
        </Button>
      </div>
    </form>
  );
}
