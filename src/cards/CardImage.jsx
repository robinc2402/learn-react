import React from "react";

const CardImage = (props) => {
  return (
    <div className="poster">
      <img src={props.imgsrc} alt="card poster" className="card__img" />
    </div>
  );
};

export default CardImage;
