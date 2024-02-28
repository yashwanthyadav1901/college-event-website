import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="timer-section">
      <div className="timer-container">
        <div className="timer">{formatTime(timeLeft.days)}</div>
        <p>days</p>
      </div>
      <div className="timer-container">
        <div className="timer">{formatTime(timeLeft.hours)}</div>
        <p>hours</p>
      </div>
      <div className="timer-container">
        <div className="timer">{formatTime(timeLeft.minutes)}</div>
        <p>minutes</p>
      </div>
      <div className="timer-container">
        <div className="timer">{formatTime(timeLeft.seconds)}</div>
        <p>seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;

{
  /* <span>{formatTime(timeLeft.days)}</span> days{" "}
        <span>{formatTime(timeLeft.hours)}</span> hours{" "}
        <span>{formatTime(timeLeft.minutes)}</span> minutes{" "}
        <span>{formatTime(timeLeft.seconds)}</span> seconds */
}
