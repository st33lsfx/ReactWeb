import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import "./TheNavigation.css";

const TheNavigation = () => {
  return (
    <div>
      <nav className="navigation">
        <NavLink className="register" to="/register">
          Register
        </NavLink>
        <NavLink className="login" to="/login">
          Login
        </NavLink>

        <ul>
          <img src={logo} className="logo" alt="logo" />
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/posts"
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TheNavigation;
