import React, { useRef, useState } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";

import "./InputForm.css";

const InputForm = () => {
  const [sendEmail, setSendEmail] = useState({
    name: "",
    email: "",
    subject: ""
  });

  const form = useRef();

  const onSendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = validator.isEmail(e.target.email.value)

    console.log(email);
    

    if (sendEmail.subject.length > 0 && name.length > 3 && email === true ) {
      
      emailjs
        .sendForm(
          "Gmail",
          "template_3kenhgc",
          form.current,
          "user_VHNn8Zy0ZsAPm7PtsqykU"
        )
        .then(
          () => {
            alert("Zpráva odeslána")
          },
          (error) => {
            console.log(error.text);
          }
        )

      form.current.reset();
      setSendEmail({name: "", email:"", subject:""})
    }
  };

  const onInputTitle = (e) => {
    console.log(e.target.value)
    setSendEmail(e.target.value)
  }

  return (
    <div>
      <form className="input-form" ref={form} onSubmit={onSendEmail}>
        <input type="text" placeholder="name" name="name" onChange={onInputTitle} value={sendEmail.name}/>
        <br />
        <input type="email" placeholder="email" name="email" onChange={onInputTitle} value={sendEmail.email} />
        <br />
        <input type="text" placeholder="subject" name="subject" onChange={onInputTitle} value={sendEmail.subject}/>
        <br />
        <input className="button" type="submit" value="Odeslat"></input>
      </form>
    </div>
  );
};

export default InputForm;
