import React from "react";
import Card from "./Card";
import "./assets/css/cards.css";
import Sdata from "./CardData";

function CardGrid() {
  return (
    <div className="cards">
      {Sdata.map((val, i) => {
        return (
          <Card
            key={i}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.snam}
            link={val.link}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
