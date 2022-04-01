import React, { useState } from "react";
import "../dist/css/Nav.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div id="logo"></div>
      <div id="hamburger" className="card card-body">
        <GiHamburgerMenu
          style={{ fontSize: "40px" }}
          onClick={toggleMenu}
        ></GiHamburgerMenu>
      </div>
      <ul className={" " + (menu === true ? "  hide" : " show")}>
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
