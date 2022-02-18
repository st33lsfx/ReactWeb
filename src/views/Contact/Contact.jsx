import React from "react";
import { Link } from "react-router-dom";
import InputForm from '../../components/InputForm/InputForm'

import "./Contact.css";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";

const Contact = () => {
  return (
    <div className="container">
      <div className="control">
        <button className=""></button>
        <button className=""></button>
        <button className=""></button>
      </div>
      <div className="contact">
        <div className="phone">
          <Link
            to=""
            onClick={() => (window.location = "tel: +420 774 073 160")}
          >
            <img src={phone} alt="phone" />
          </Link>
          <p>+420 774 073 160</p>
        </div>
        <br />
        <div className="email">
          <Link
            to=""
            onClick={() => (window.location = "mailto:ondra.nemec91@seznam.cz")}
          >
            <img src={email} alt="email" />
          </Link>
          <p>ondra.nemec91@seznam.cz</p>
        </div>
      </div>
      <InputForm />
    </div>
  );
};

export default Contact;
