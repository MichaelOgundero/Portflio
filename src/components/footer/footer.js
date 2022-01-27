import React from "react";
import "./footer.css";
import facebookIcon from "../../assets/icons/facebook_icon_24px.svg";
import instagramIcon from "../../assets/icons/instagram_icon_24px.svg";
import linkedinIcon from "../../assets/icons/linkedin_icon_24px.svg";
import githubIcon from "../../assets/icons/github_icon_24px.svg";
import personalLogo from "../../assets/icons/personal_logo_white.svg";

const Footer = ({ handleFocusAbout, handleFocusContact, handleFocusWork }) => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-icon">
          <img alt="personal logo" src={personalLogo} />
        </div>
        <div className="footer-social-media">
          <img
            onClick={() => {
              window.open(
                "https://www.facebook.com/micheal.ogundero",
                "_blank"
              );
            }}
            alt="facebook-icon"
            src={facebookIcon}
          />
          <img
            onClick={() => {
              window.open(
                "https://www.instagram.com/michaelogundero/",
                "_blank"
              );
            }}
            alt="instagram-icon"
            src={instagramIcon}
          />
          <img
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/michael-ogundero-a03b9817a/",
                "_blank"
              );
            }}
            alt="linkedin-icon"
            src={linkedinIcon}
          />
          <img
            onClick={() => {
              window.open("https://github.com/MichaelOgundero", "_blank");
            }}
            alt="github-icon"
            src={githubIcon}
          />
        </div>
        <div className="footer-links">
          <a onClick={handleFocusAbout}>Info</a>
          <a onClick={handleFocusWork}>Work</a>
          <a onClick={handleFocusContact}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
