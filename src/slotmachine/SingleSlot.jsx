import React from "react";

const SingleSlot = (props) => {
  let m = props.match === 1 ? "matching" : "not matching";
  return (
    <div>
      <h2>
        {props.x} {props.y} {props.z}
      </h2>
      <h3>This is {m}</h3>
    </div>
  );
};

export default SingleSlot;
