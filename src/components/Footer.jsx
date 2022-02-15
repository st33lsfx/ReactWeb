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
        <a href="http://www.facebook.com">
          <img src={facebook} className="facebook" alt="facebook" />
        </a>
        <a href="http://github">
          <img src={github} className="github" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
