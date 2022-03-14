import React from "react";
import "../dist/css/Contact.css";
import { FcCustomerSupport } from "react-icons/fc";

const Contact = () => {
  return (
    <div className="card" id="contact">
      <div className="card-container">
        <div className="card-header" id="contact-header">
          <FcCustomerSupport style={{ fontSize: "95px" }}></FcCustomerSupport>
        </div>
        <div className="card-body" id="contact-body">
          <h2 class="card-title">Contact</h2>
          Om mig Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default Contact;
