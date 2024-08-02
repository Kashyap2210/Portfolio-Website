import * as React from "react";
import "./index.css";
import "./CustomCursor.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({
  imgSource,
  githubLink,
  demoLink,
  description,
  isDarkMode,
}) {
  return (
    <div className="m-4 hover:scale-105 ease-in-out	duration-300">
      <Card
        className={`max-w-xs min-h-[268px] transition duration-300 ease-in-out transform  ${
          isDarkMode
            ? "bg-lotus_gold hover:shadow-lotus_gold hover:shadow-lg	"
            : "bg-navbarColor hover:shadow-lightShadow hover:shadow-lg		"
        }`}
      >
        <div
          className={`h-40 ${isDarkMode ? "bg-lotus_gold" : "bg-navbarColor"}`}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgSource}
            style={{
              backgroundColor: isDarkMode ? "#f7a920" : "#261132",
              color: isDarkMode ? "black" : "white",
              height: "8rem",
            }}
          />
        </div>
        <CardContent
          sx={{
            flex: "1 0 auto",
            backgroundColor: isDarkMode ? "#f7a920" : "#261132",
            color: isDarkMode ? "black" : "white",
          }}
        >
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography
            variant="body2"
            style={{
              backgroundColor: isDarkMode ? "#f7a920" : "#261132",
              color: isDarkMode ? "black" : "white",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#f7a920" : "#261132",
            color: isDarkMode ? "black" : "white",
          }}
        >
          <Button
            size="small"
            component="a"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: isDarkMode ? "black" : "white",
              backgroundColor: isDarkMode ? "#f7a920" : "#261132",
              border: isDarkMode ? "1px solid black" : "1px solid white",
            }}
          >
            Demo
          </Button>
          <Button
            size="small"
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: isDarkMode ? "black" : "white",
              backgroundColor: isDarkMode ? "#f7a920" : "#261132",
              border: isDarkMode ? "1px solid black" : "1px solid white",
            }}
          >
            View Github
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
