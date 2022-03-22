import { FaReact } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import "../dist/css/AboutPage.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Om mig";
  }, []);
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
          Om mig
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
          Min aspiration är att jobba med react eller liknande bibliotek. Mina
          kunskaper ligger mot HTML, CSS, javascript och node.js med diverse
          paket och API-kommunikation. Jag har tillräcklig kunskap med git och
          har en förkärlek till kommandotolken på Linux.
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
          Jag utbildar mig på tvåårig yrkeshögskola som front end-utvecklare.
          Jag anser däremot att man lär sig mer av att göra saker på egen hand.
          Det är som som att ta körkort: man lär sig köra bil genom att köra bil
          och inte på en körskola.
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
          Jag heter Jesper Holmlund och är 29 år gammal och kommer ursprungligen
          från Skellefteå men flyttade ner till Uppsala för att studera på
          yrkeshögskola i Stockholm. För mig handlar programmering om att jobba
          med att lösa problem. Det gör jag genom att forma en idé om vad som
          ska göras och sedan bryta ner idéen till beståndsdelar och lösa varje
          beståndsdel var för sig.
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
