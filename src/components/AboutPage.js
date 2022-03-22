import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import "../dist/css/AboutPage.css";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      id="aboutPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 2,
      }}
    >
      <div className="card">
        <h1 className="card-title" style={{ margin: "auto" }}>
          About
        </h1>
      </div>
      <div id="" className="card aboutPage">
        <ul>
          <li>
            <FaReact style={{ color: "#61DBFB" }}></FaReact>
          </li>
        </ul>
        <div
          className="card-body"
          style={{
            fontSize: "23px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div id="" className="card aboutPage">
        <ul>
          <li>
            <FcReading></FcReading>
          </li>
        </ul>
        <div
          className="card-body"
          style={{ fontSize: "23px", maxWidth: "800px", margin: "auto" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div id="" className="card aboutPage">
        <ul>
          <li>
            <FcBusinessman></FcBusinessman>
          </li>
        </ul>
        <div
          className="card-body"
          style={{ fontSize: "23px", maxWidth: "800px", margin: "auto" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
