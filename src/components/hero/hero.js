import React, { useState } from "react";
import "./hero.css";

const Hero = ({ handleFocusWork }) => {
  return (
    <>
      <div className="hero-container">
        <h2>Michael Ogundero</h2>
        <div className="hero-container-description-container">
          <p>Front-end Developer</p>
          <p>Graphic Designer</p>
        </div>
        <div
          onClick={() => {
            handleFocusWork();
          }}
          className="hero-button"
        >
          See Work
        </div>
      </div>
    </>
  );
};

export default Hero;
