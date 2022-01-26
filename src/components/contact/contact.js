import React from "react";
import "./contact.css";
import phoneIcon from "../../assets/icons/phone_icon_24px.svg";
import mailIcon from "../../assets/icons/mail_icon_24px.svg";
import instagramIcon from "../../assets/icons/instagram_icon_24px.svg";
import facebookIcon from "../../assets/icons/facebook_icon_24px.svg";
import linkedinIcon from "../../assets/icons/linkedin_icon_24px.svg";
import githubIcon from "../../assets/icons/github_icon_24px.svg";
import arrowRight from "../../assets/icons/arrow-right_icon_24px.svg";

const Contact = ({ focusContact }) => {
  return (
    <>
      <div ref={focusContact} className="contact-title">
        <h2>Contact</h2>
      </div>
      <div className="contact-container">
        <div className="contact-item">
          <img title="email" alt="email icon" src={mailIcon} />
          <a
            href="mailto:ogunderomichael.com"
            style={{ textTransform: "lowercase" }}
            title="email"
          >
            ogunderomichael@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <img title="phone" alt="email icon" src={phoneIcon} />
          <p title="phone"> 639-999-9732</p>
        </div>
        <div className="contact-item-social-media">
          <img
            className="social-icons"
            title="instagram"
            alt="email icon"
            src={instagramIcon}
          />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/michaelogundero/"
            title="instagram"
          >
            {" "}
            Instagram
          </a>
          <img
            className="contact-item-arrow"
            title="go to site"
            alt="arrow right"
            src={arrowRight}
            onClick={() => {
              window.open(
                "https://www.instagram.com/michaelogundero/",
                "_blank"
              );
            }}
          />
        </div>
        <div className="contact-item-social-media">
          <img
            className="social-icons"
            title="facebook"
            alt="email icon"
            src={facebookIcon}
          />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/micheal.ogundero"
            title="facebook"
          >
            {" "}
            Facebook
          </a>
          <img
            className="contact-item-arrow"
            title="go to site"
            alt="arrow right"
            src={arrowRight}
            onClick={() => {
              window.open(
                "https://www.facebook.com/micheal.ogundero",
                "_blank"
              );
            }}
          />
        </div>
        <div className="contact-item-social-media">
          <img
            className="social-icons"
            title="linkedin"
            alt="email icon"
            src={linkedinIcon}
          />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/michael-ogundero-a03b9817a/"
            title="linkedin"
          >
            {" "}
            LinkedIn
          </a>
          <img
            className="contact-item-arrow"
            title="go to site"
            alt="arrow right"
            src={arrowRight}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/michael-ogundero-a03b9817a/",
                "_blank"
              );
            }}
          />
        </div>
        <div className="contact-item-social-media">
          <img
            className="social-icons"
            title="github"
            alt="email icon"
            src={githubIcon}
          />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/MichaelOgundero"
            title="github"
          >
            {" "}
            Github
          </a>
          <img
            className="contact-item-arrow"
            title="go to site"
            alt="arrow right"
            src={arrowRight}
            onClick={() => {
              window.open("https://github.com/MichaelOgundero", "_blank");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
