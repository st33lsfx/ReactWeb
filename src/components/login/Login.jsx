import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="control">
        <button className="cross"></button>
        <button className="minus"></button>
        <button className="ctverec"></button>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={userLogin.email}
          onChange={handleInput}
          placeholder="Email"
          id="email"
        ></input>
        <br />
        <input
          type="password"
          name="password"
          value={userLogin.password}
          onChange={handleInput}
          placeholder="Password"
          id="password"
        ></input>
        <br />
        <button type="submit" className="button-login">
          Sign in
        </button>
        <br />
        <small>Pokud nemáte účet můžete se </small>
        <Link
          to="/register
            "
        >
          zaregistrovat
        </Link>
        <></>
      </form>
    </div>
  );
};

export default Login;
