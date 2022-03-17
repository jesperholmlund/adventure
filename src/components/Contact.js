import React from "react";
import "../dist/css/Contact.css";
import { FcCustomerSupport } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="card" id="contact">
      <div className="card-container" style={{ flexDirection: "row-reverse" }}>
        <div className="" id="contact-header">
          <FcCustomerSupport style={{ fontSize: "200px" }}></FcCustomerSupport>
        </div>
        <div className="card-body" id="contact-body">
          <h1 className="card-title">Contact</h1>
          <p className="card-text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <NavLink to="/contact" className="btn btn-danger btn-lg">
              Kontakta mig
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
