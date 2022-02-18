import React, { useState } from "react";

import "./Register.css";

import registered from "./registered.svg";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [messageError, setMessageError] = useState('')
  const [passCoincides, setPassCoincides] = useState('')
  const [record, setRecord] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegister, id: new Date().getTime().toString()}

    setRecord([...record, newRecord ])
    // console.log(newRecord)

    setUserRegister({firstName:'', lastName:'', username:'', email:'', password1:'', password2:''})

    if(userRegister.password1.length <= 5) {
      setMessageError("Heslo musí mít minimálně 6 znaků")
    }else{
      setMessageError('')
    }

    if(userRegister.password1 !== userRegister.password2) {
      setPassCoincides("hesla se neshodují")
    }else{
      setPassCoincides("")
    }
  };

  return (
    <div className="container">
      <div className="control">
        <button className="cross"></button>
        <button className="minus"></button>
        <button className="ctverec"></button>
      </div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <img src={registered} alt="registered" className="registeredLogo" />
        <h2>Registration</h2>
        <input
          type="text"
          value={userRegister.firstName}
          onChange={handleInput}
          name="firstName"
          placeholder="First Name"
          id="firsname"
        ></input>
        <br />
        <input
          type="text"
          value={userRegister.lastName}
          onChange={handleInput}
          name="lastName"
          placeholder="Last Name"
          id="lastname"
        ></input>
        <br />
        <input
          type="text"
          value={userRegister.username}
          onChange={handleInput}
          name="username"
          placeholder="Username"
          id="username"
        ></input>
        <br />
        <input
          type="email"
          value={userRegister.email}
          onChange={handleInput}
          name="email"
          placeholder="Email"
          id="email"
        ></input>
        <br />
        <input
          type="password"
          value={userRegister.password1}
          onChange={handleInput}
          name="password1"
          placeholder="Password"
          id="password1"
        ></input>
        <label className="messageError">{messageError}</label>
        <input
          type="password"
          value={userRegister.password2}
          onChange={handleInput}
          name="password2"
          placeholder="Password"
          id="úassword2"
        ></input>
        <label className="messageError">{passCoincides}</label>
        <br />
        <button
          className="registerButton"
          type="submit"
        >Registered</button>
      </form>
    </div>
  );
};

export default Register;
