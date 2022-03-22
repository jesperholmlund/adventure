import React from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";

const ContactPage = () => {
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
            <label htmlFor="inputTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputMessage">Message</label>
            <textarea
              placeholder="Message"
              class="form-control"
              id="inputMessage"
              rows="5"
            ></textarea>
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Skicka
        </button>
      </motion.form>
    </>
  );
};

export default ContactPage;
