import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./InputForm.css";


const InputForm = () => {



  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_3kenhgc",
        form.current,
        "user_VHNn8Zy0ZsAPm7PtsqykU"
      )
      .then(
        () => {
          console.log("Zpráva odeslána");
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset()
  }

  return (
    <div>
      <form className="input-form" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="email" placeholder="email" name="email" />
        <br />
        <input type="text" placeholder="number" name="number" />
        <br />
        <textarea
          className="text-area"
          type="text"
          rows="10"
          cols="30"
          placeholder="Some text..."
          name="message"
        ></textarea>
        <br />
        <input className="button" type="submit" value="Odeslat" ></input>
      </form>
    </div>
  );
};

export default InputForm;
