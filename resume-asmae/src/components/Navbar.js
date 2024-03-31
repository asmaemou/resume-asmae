import React from "react";
import logo from "../images/mylogo.png";

const Navbar = () => {
  return (
    <nav>
      <img className="Mylogo" src={logo} alt="Logo" />
      <ul id="sidemenu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="services">Services</a>
        </li>
        <li>
          <a href="portfolio">Portfolio</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
