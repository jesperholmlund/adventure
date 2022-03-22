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
          <h1 className="card-title">Kontakt</h1>
          <p className="card-text">
            {" "}
            Vill du komma i kontakt med mig? Du kan maila till
            jesper@holmlunds.design eller trycka på knappen nedan och komma till
            ett formulär.
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
