import React from "react";
import "../dist/css/About.css";
import { FcBusinessman } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="card" id="about">
      <div className="card-container">
        <div className="card-header" id="about-header">
          <FcBusinessman style={{ fontSize: "200px" }}></FcBusinessman>
        </div>
        <div className="card-body" id="about-body">
          <h1 class="card-title">About</h1>
          <p class="card-text">
            {" "}
            Om mig Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <a href="about" class="btn btn-outline-dark btn-lg">
              Om mig
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
