import React from "react";
import "../dist/css/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="card" style={{ maxWidth: "250px" }}>
        <div className="card-body">
          <FaFacebook></FaFacebook>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <FaLinkedin></FaLinkedin>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <FaGithub></FaGithub>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
