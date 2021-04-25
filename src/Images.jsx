import React from "react";

const img1 = "https://picsum.photos/200/200";
const img2 = "https://picsum.photos/300/200";
const img3 = "https://picsum.photos/100/200";

function Images() {
  return (
    <>
      <img src={img1} alt="example" />
      <img src={img2} alt="example" />
      <img src={img3} alt="example" />
    </>
  );
}

export default Images;
