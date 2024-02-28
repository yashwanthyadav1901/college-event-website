import React from "react";
import "./Hero.css";
import FestImage from "./assets/images/img_1.jpg";

const About = () => {
  return (
    <div className="main">
      <div className="festimage">
        <div>
          <img src={FestImage} alt="fest" className="image" />
        </div>
      </div>
      <div className="fest-info">
        <div className="fest-about">
          {" "}
          <h2>About the fest</h2>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          incidunt sed harum at dignissimos, modi autem atque quia, voluptatum
          optio ad? Facilis ipsam reprehenderit vitae nulla maiores quibusdam
          ratione libero. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laborum incidunt, deserunt fugit quisquam sequi autem voluptatum
          sed et tempora pariatur accusamus possimus ratione, sunt, quae minima
          corrupti. Eveniet, magni explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          corrupti magni eveniet sequi, blanditiis ad.
        </p>
      </div>
    </div>
  );
};

export default About;
