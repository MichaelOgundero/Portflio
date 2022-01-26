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
            Hi my name is Michael Ogundero, im a front-end developer and a
            graphic designer currently studying at the Saskatchewan polytechnic
            in Regina
          </p>
          <div className="about-description-skillset">
            <div className="about-description-skill">
              <h3>Skills</h3>
              <div className="about-skills-container">
                <p>skill 1</p>
                <p>skill skill skill skill skill</p>
                <p>skill 3</p>
                <p>skill 4</p>
              </div>
            </div>
            <div className="about-description-technology">
              <h3>Technology</h3>
              <div className="about-skills-container">
                <p>tech 1</p>
                <p>tech 2</p>
                <p>tech 3</p>
                <p>tech 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
