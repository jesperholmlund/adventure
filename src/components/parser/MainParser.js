import React from "react";
import "../../dist/css/Parser.css";
import { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import CardParser from "./CardParser";
import FlashCard from "./FlashCard";

const MainParser = () => {
  const [cardStack, setCardStack] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [book, setBook] = useState("");
  const [visibility, setVisibility] = useState(false);

  const handleInput = (data, bookInfo, r) => {
    data.splice(0, 8);
    data.forEach((d) => {
      setCardList((cardList) => [...cardList, d[3]]);
      setSearchList((searchList) => [...searchList, d[3]]);
    });
    setBook(bookInfo);
    console.log(bookInfo);
    setVisibility(true);
  };
  const options = {
    skipEmptyLines: true,
    keepEmptyRows: false,
    Headers: false,
  };
  const handleChange = (e) => {
    if (!e.target.value) {
      setSearchList(cardList);
      return;
    }
    const result = cardList.filter((card) =>
      card.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const resultMark = result.map((r, i) =>
      r
        .toLowerCase()
        .replaceAll(e.target.value, `<mark>${e.target.value}</mark>`)
    );
    setSearchList(resultMark.filter(Boolean));
  };
  const callBackCard = (card) => {
    setCardStack((cardStack) => [...cardStack, card]);
  };

  const cardStackInfo = () => {
    console.log(cardStack);
    setVisibility(false);
  };
  return (
    <div id="mainParser">
      <div id="mainTop" className="">
        <h3>Highlight kindle</h3>
        <CSVReader
          onFileLoaded={handleInput}
          parserOptions={options}
        ></CSVReader>{" "}
        <input
          id="fileUpload"
          name="search"
          placeholder="search"
          type="text"
          onChange={handleChange}
        ></input>
        <a
          className={
            "bg-dark card text-light card-body" +
            (visibility === true ? " show" : " hide")
          }
          style={{ textDecoration: "none", background: "#232f3e" }}
        >
          {book.name}
        </a>
        <a className={"card" + (visibility === true ? " hide" : " show")}>
          Loading...
        </a>
      </div>
      <div className={"" + (visibility === false ? " show" : " hide")}>
        <div id="flashCards">
          {cardStack.map((card, i) => (
            <FlashCard key={i} text={card}></FlashCard>
          ))}
        </div>
      </div>
      <div className={"" + (visibility === false ? " hide" : " show")}>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "20px" }}
        >
          <a className="btn text-light">{cardStack.length} added</a>
          <a className="btn btn-danger" onClick={cardStackInfo}>
            Show
          </a>
        </div>
        <div id="cardList">
          {searchList.map((list, i) => (
            <CardParser
              key={i}
              text={list}
              callBack={callBackCard}
            ></CardParser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainParser;
