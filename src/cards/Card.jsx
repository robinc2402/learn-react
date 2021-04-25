import React from "react";
import CardImage from "./CardImage";
import CardHeading from "./CardHeading";

function Card(props) {
  return (
    <div className="card">
      <CardImage imgsrc={props.imgsrc} />
      <div className="card__info">
        <span className="card__category">{props.sname}</span>
        <CardHeading title={props.title} />
        <a href="{props.link}" target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
