import React from "react";

import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";

import "./Footer.css";

const Footer = () => {
  const name = "Ondřej Němec";
  return (
    <div className="footer">
      <p>Stránky vytvořil {name}</p>
      <div className="link-logo frame">
        <a href="https://www.instagram.com/">
          <img src={instagram} className="instagram" alt="instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008319951155">
          <img src={facebook} className="facebook" alt="facebook" />
        </a>
        <a href="https://github.com/st33lsfx">
          <img src={github} className="github" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
