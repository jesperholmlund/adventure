import React from "react";
import "../dist/css/About.css";
import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const About = (props) => {
  return (
    <div className="card" id="about">
      <div className="card-container">
        <div className="" id="about-header">
          <FcBusinessman style={{ fontSize: "200px" }}></FcBusinessman>
        </div>
        <div className="card-body" id="about-body">
          <h1 className="card-title">About</h1>
          <p className="card-text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <NavLink to="/about" className="btn btn-outline-dark btn-lg">
              Om mig
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
