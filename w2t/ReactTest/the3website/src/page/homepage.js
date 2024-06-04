// HomePage.js
import React from "react";
import { Carousel } from "@mui/material";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Company!</h1>
      <Carousel>
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </Carousel>
    </div>
  );
}

export default HomePage;
