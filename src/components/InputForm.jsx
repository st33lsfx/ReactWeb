import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./InputForm.css";


const InputForm = () => {

  const [inputVal, setInputVal] = useState('')

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

  const hadleChange = (e) => {
      setInputVal(e.target.value)
  }

  return (
    <div className="input-form">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="email" placeholder="email" name="email" />
        <br />
        <input type="text" placeholder="number" name="number" />
        <br />
        <textarea
          onChange={hadleChange}
          value={inputVal}
          className="text-area"
          type="text"
          rows="10"
          cols="40"
          placeholder="Some text..."
          name="message"
        ></textarea>
        <br />
        <input className="button" type="submit" value="Odeslat" disabled={!inputVal} ></input>
      </form>
    </div>
  );
};

export default InputForm;
