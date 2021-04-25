import React from "react";
import Card from "./Card";
import "./assets/css/cards.css";
import Sdata from "./CardData";

function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.snam}
      link={val.link}
    />
  );
}

function CardGrid() {
  return <div className="cards">{Sdata.map(ncard)}</div>;
}

export default CardGrid;
