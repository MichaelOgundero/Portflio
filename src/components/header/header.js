import React, { useState } from "react";
import "./header.css";
import { useMediaQuery } from "react-responsive";

import closeIcon from "../../assets/icons/close_icon_24px.svg";
import menuIcon from "../../assets/icons/menu_icon_24px.svg";
import personalLogo from "../../assets/icons/personal_logo_black.svg";

const Header = ({
  focusNavBar,
  handleFocusAbout,
  handleFocusContact,
  handleFocusWork,
}) => {
  const [navLinksStatus, setNavLinkStatus] = useState(false);
  const [displayNavLinks, setDisplayNavLinks] = useState("none");

  const isGreaterThanMobile = useMediaQuery({
    query: "(min-width: 601px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const handleNavLinks = () => {
    if (navLinksStatus) {
      setDisplayNavLinks("none");
    } else {
      setDisplayNavLinks("flex");
    }
  };

  return (
    <>
      {isMobile && (
        <div ref={focusNavBar} className="nav-bar-container">
          <div className="nav-bar">
            <div className="nav-bar-logo">
              <img alt="personal logo" src={personalLogo} />
            </div>
            <div className="nav-links-icon">
              <img
                onClick={() => {
                  setNavLinkStatus(!navLinksStatus);
                  handleNavLinks();
                }}
                alt="nav-link-status-icon"
                width="10%"
                src={navLinksStatus ? closeIcon : menuIcon}
              />
            </div>
          </div>
          <nav
            style={{
              display: displayNavLinks,
            }}
          >
            <a onClick={handleFocusAbout}>Info</a>
            <a onClick={handleFocusContact}>Contact</a>
            <a onClick={handleFocusWork}>Work</a>
          </nav>
        </div>
      )}
      {isGreaterThanMobile && (
        <div ref={focusNavBar} className="nav-bar">
          <div className="nav-bar-logo">
            <div className="nav-bar-logo">
              <img alt="personal logo" src={personalLogo} />
            </div>{" "}
          </div>
          <nav style={{ borderTop: "none" }}>
            <a onClick={handleFocusAbout}>Info</a>
            <a onClick={handleFocusContact}>Contact</a>
            <a onClick={handleFocusWork}>Work</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
