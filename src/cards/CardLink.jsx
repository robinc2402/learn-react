import React from "react";

const CardLink = (props) => {
  return (
    <a href={props.link} target="_blank">
      <button>Watch Now</button>
    </a>
  );
};

export default CardLink;
