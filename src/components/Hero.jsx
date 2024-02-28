import React from "react";
import festimg from "./assets/fest.png";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const targetDate = new Date("2024-03-01T00:00:00");
  return (
    <>
      <div className="hero-section">
        <div className="festlogo-container">
          <img src={festimg} alt="" className="festlogo" />
        </div>
        <p className="countdown-header">starts in</p>
        <div className="countdown">
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </>
  );
};

export default Hero;
