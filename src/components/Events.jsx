import React from "react";
import "./Events.css";
import img1 from "./assets/images/img_2.jpg";
import img2 from "./assets/images/img_3.jpg";
import img3 from "./assets/images/img_4.jpg";

const Events = () => {
  return (
    <div className="event-section">
      <h2>Major Attractions</h2>
      <div className="main-events">
        <div className="event-list">
          <img src={img1} alt="" className="event-image" />
          <p>cultural</p>
        </div>
        <div className="event-list">
          <img src={img2} alt="" className="event-image" />
          <p>sports</p>
        </div>
        <div className="event-list">
          <img src={img3} alt="" className="event-image" />
          <p>tech fest</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
