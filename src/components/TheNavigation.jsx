import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../logo.svg";

import "./TheNavigation.css";

const TheNavigation = () => {
  return (
    <div>
      <nav className="navigation">
        <img src={logo} className="logo" alt="logo" />

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default TheNavigation;
