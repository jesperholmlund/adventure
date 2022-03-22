import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Kontakt";
  }, []);
  return (
    <>
      <motion.form
        style={{ maxWidth: "800px", padding: "16px", margin: "auto" }}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 2,
        }}
      >
        {" "}
        <div className="card">
          <h1 className="card-title" style={{ margin: "auto" }}>
            Kontakt
          </h1>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputTitle">Ämne</label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Ämne"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputMessage">Meddelande</label>
            <textarea
              placeholder="Meddelande"
              className="form-control"
              id="inputMessage"
              rows="5"
            ></textarea>
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Kontakta
        </button>
      </motion.form>
    </>
  );
};

export default ContactPage;
