import React from "react";
import "./Footer.css";
import logo from "./assets/logo.webp";

const footer = () => {
  return (
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <img src={logo} alt="Logo" class="logo"></img>
          <p className="college-info">
            Guru Nanak Institutions is one of the largest educational groups in
            India with 10,000+ Students currently enrolled in various programs
            of studies including Engineering and Technology, Pharmacy, Business
            Management and Dental Science.
          </p>
        </div>

        <div class="box">
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="https://www.gniindia.org/jntuh.php">AICTE</a>
            </li>
            <li>
              <a href="https://www.gniindia.org/jntuh.php">JNTUH</a>
            </li>
            <li>
              <a href="https://www.gniindia.org/gnitc/ssr-gnitc.php">NAAC</a>
            </li>
            <li>
              <a href="https://www.gniindia.org/nba.php">NBA</a>
            </li>
            <li>
              <a href="https://www.gniindia.org/nirf.php">NIRF</a>
            </li>
          </ul>
        </div>

        <div class="box">
          <h3>Get In touch</h3>
          <h3 class="contact-heading">Corporate Office</h3>
          <p className="contact-para">
            Plot No.B2, 2nd Floor, Above Bata Showroom, Vikrampuri Colony,
            Kharkhana Road, Sec-500 009, Telangana INDIA
          </p>

          <h3 class="contact-heading">Campus Address</h3>
          <p className="contact-para">
            Ibrahimpatnam, R. R. Dist, Hyderabad - 501506, TELANGANA, INDIA
          </p>
        </div>
      </div>
    </section>
  );
};

export default footer;
