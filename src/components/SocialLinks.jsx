import React from "react";
import "./Hero.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="#" className="social-link">
        <FaInstagram />
      </a>
      <a href="#" className="social-link">
        <FaFacebook />
      </a>
      <a href="#" className="social-link">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialLinks;
