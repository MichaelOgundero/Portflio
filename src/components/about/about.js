import React from "react";
import "./about.css";

import aboutImage from "../../assets/images/testImage.jpg";

const About = ({ focusAbout }) => {
  return (
    <>
      <div ref={focusAbout} className="about-title">
        <h2>About</h2>
      </div>
      <div className="about-container">
        <div className="about-img-container">
          <img alt="michael ogundero" src={aboutImage} />
        </div>
        <div className="about-description">
          <p>
            My name is Michael Ogundero, I'm currently studying Graphic
            Communications at the Saskatchewan Polytechnic. I also have a
            bachelors degree in Software Engineering from the Budapest
            University of Technology and Economics. Scroll down to take a look
            at some of the individual projects I've completed.
          </p>
          <div className="about-description-skillset">
            <div className="about-description-skill">
              <h3>Skills</h3>
              <div className="about-skills-container">
                <p>Programming</p>
                <p>Photography</p>
                <p>Print Design</p>
                <p>Logo Design</p>
                <p>Image Editing</p>
              </div>
            </div>
            <div className="about-description-technology">
              <h3>Technology</h3>
              <div className="about-skills-container">
                <p>React</p>
                <p>Node.js</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Typescript</p>
                <p>InDesign</p>
                <p>Illustrator</p>
                <p>Photoshop</p>
                <p>Bootstrap</p>
                <p>MS Office</p>
                <p>VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
