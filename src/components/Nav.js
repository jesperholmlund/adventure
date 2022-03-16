import React from "react";
import "../dist/css/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Hem</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projektlista</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/about">Om mig</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
