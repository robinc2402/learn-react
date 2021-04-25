import React from "react";

let heading = {
  textShadow: "2px 2px 0 black",
  fontWeight: "600"
};

let currDate = new Date(2021, 4, 1, 17).getHours();

let greeting = "Good morning";

if (currDate >= 12 && currDate < 16) {
  greeting = "Good afternoon";
} else if (currDate >= 16 && currDate <= 24) {
  greeting = "Good evening";
}

function Heading() {
  return (
    <h1 className="title" style={heading}>
      Hi Robin, {greeting}
    </h1>
  );
}

export default Heading;
