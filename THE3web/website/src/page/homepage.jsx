// HomePage.js
import React, { useEffect } from "react";
import { Box, Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import TutorialPage from "./tutorial";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const tutorialRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(`Current Path: ${currentPath}`); // 调试日志

    // 根据路径进行相应的处理
    if (currentPath === "/AllTutorial") {
      tutorialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);
  return (
    <Container fixed>
      <Grid container sx={{ paddingBottom: "3vh" }}>
        <img src="static/basic.png" className="banner"></img>
      </Grid>
      <Grid ref={tutorialRef} sx={{ paddingTop: "3vh" }} id="AllTutorial">
        <Typography
          variant="subtitle1"
          color="primary"
          fontWeight="bold"
          sx={{ padding: "3vh" }}
        >
          All Tutorial
        </Typography>
        <TutorialPage />
      </Grid>
    </Container>
  );
}

export default HomePage;
