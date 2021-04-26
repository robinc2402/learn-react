import React from "react";
import SingleSlot from "./SingleSlot";

const SlotM = (props) => {
  let match = props.x === props.y && props.x === props.z ? 1 : 0;
  return <SingleSlot x={props.x} y={props.y} z={props.z} match={match} />;
};

export default SlotM;
