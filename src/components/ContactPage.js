import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.form
      style={{ maxWidth: "800px", padding: "16px", margin: "auto" }}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 2,
      }}
    ></motion.form>
  );
};

export default ContactPage;
