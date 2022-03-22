import React from "react";
import "../dist/css/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "btn " + (isActive ? "border-secondary" : " ")
            }
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              "btn " + (isActive ? "border-secondary" : " ")
            }
          >
            Projektlista
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "btn " + (isActive ? "border-secondary" : " ")
            }
          >
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "btn " + (isActive ? "border-secondary" : " ")
            }
          >
            Om mig
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
