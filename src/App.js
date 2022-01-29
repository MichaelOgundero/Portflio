import React, { useRef } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Grid from "./components/grid/grid";
import About from "./components/about/about";
import arrowUp from "./assets/icons/arrow-up_icon_24px.svg";
import Contact from "./components/contact/contact";

import pageDesigns from "./dataset/pageDesigns";
import logos from "./dataset/logos";
import photos from "./dataset/photos";
import websites from "./dataset/websites";

function App() {
  const focusNavBar = useRef();
  const focusAbout = useRef();
  const focusContact = useRef();
  const focusWork = useRef();

  const handleFocusNavBar = () => {
    focusNavBar.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleFocusAbout = () => {
    focusAbout.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleFocusContact = () => {
    focusContact.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleFocusWork = () => {
    focusWork.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
        focusNavBar={focusNavBar}
        handleFocusAbout={handleFocusAbout}
        handleFocusContact={handleFocusContact}
        handleFocusWork={handleFocusWork}
      />
      <Hero handleFocusWork={handleFocusWork} />
      <About focusAbout={focusAbout} />
      <Grid
        focusWork={focusWork}
        title={"Websites"}
        gridNoImage={true}
        dataSet={websites}
      />
      <Grid title={"Print Media"} dataSet={pageDesigns} />
      <Grid title={"Illustrations"} dataSet={logos} />
      <Grid title={"Photography"} dataSet={photos} />
      <Contact focusContact={focusContact} />
      <Footer
        handleFocusAbout={handleFocusAbout}
        handleFocusContact={handleFocusContact}
        handleFocusWork={handleFocusWork}
        handleFocusNavBar={handleFocusNavBar}
      />
      <img
        title="Go back to the top"
        className="go-back-top-container"
        alt="go back top"
        src={arrowUp}
        onClick={handleFocusNavBar}
      />
    </>
  );
}

export default App;
