import React from "react";
import "../dist/css/About.css";
import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="card" id="about">
      <div className="card-container">
        <div className="" id="about-header">
          <FcBusinessman style={{ fontSize: "200px" }}></FcBusinessman>
        </div>
        <div className="card-body" id="about-body">
          <h1 className="card-title">Om mig</h1>
          <p className="card-text">
            {" "}
            Jag heter Jesper Holmlund och utbildar mig till front end-utvecklare
            och jag vill i min karriär rikta in mig mot react och UI och
            liknande.
          </p>
          <div>
            <NavLink to="/about" className="btn btn-outline-dark btn-lg">
              Mer om mig
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
