import React from "react";
import Card from "./Card";
import "./assets/css/cards.css";
import Sdata from "./CardData";

console.log(Sdata);

function CardGrid() {
  return (
    <>
      <div className="cards">
        <Card
          imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          sname={Sdata[0].snam}
          link={Sdata[0].link}
        />
        <Card
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          sname={Sdata[1].snam}
          link={Sdata[1].link}
        />
        <Card
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          sname={Sdata[2].snam}
          link={Sdata[2].link}
        />
        <Card
          imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          sname={Sdata[3].snam}
          link={Sdata[3].link}
        />
      </div>
    </>
  );
}

export default CardGrid;
