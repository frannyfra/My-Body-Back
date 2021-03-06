import React from "react";
import Header from "../Header/Header";
import brain from "../assets/icons/color-brain.svg";
import wave from "../assets/icons/color-wave.svg";
import flower from "../assets/icons/color-flower.svg";
import butterfly from "../assets/icons/butterfly.svg";
import butterflyicon from "../assets/icons/color-butterfly-first-page.svg";

import "./Welcome.css";

const Welcome = ({ setMenuDisplay }) => {
  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);
  return (
    <div className="welcome__container">
      <Header />
      <h2 className="welcome__title" data-testid="welcome-title">
        Welcome
      </h2>
      <p className="welcome__text__main">
        Welcome to My Body Back app. We are here to give you some support to
        handle the difficult experience you might have lived. We truly believe
        that understanding ourselves is the key to getting better. Here is an
        overview of how to navigate through the site.
      </p>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={brain} alt="brain" />
        <p className="welcome__text">
          Tired, over thinking, need scientific answers? Helping ourselves to
          understand how our emotions work and how to get better.
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={wave} alt="wave" />
        <p className="welcome__text">
          Feeling overwhelmed and are your emotions taking over you like a wave?
          You are not alone... Get support from professionals and encourage
          yourself with Notes of Love from all around the world.
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={flower} alt="flower" />
        <p className="welcome__text">
          My Appointment section will help you to get prepared and open
          yourself, as a flower to professionals who'll guide you through the
          path of acceptance and feeling better.
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={butterflyicon} alt="butterfly" />
        <p className="welcome__text">
          Need help to navigate through the app? Find answers on the butterfly.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
