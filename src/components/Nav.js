import React from "react";
import "../dist/css/Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Hem</a>
        </li>
        <li>
          <a href="/projects">Projektlista</a>
        </li>
        <li>
          <a href="/contact">Kontakt</a>
        </li>
        <li>
          <a href="/about">Om mig</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
