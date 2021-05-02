import React from "react";

const App = () => {
  const myGames = ["RON", "COD", "NFS", "CS", "AC"];
  const latestGames = ["FarCry", "ResidentEvil", "Burnout", "GTA"];

  // Array spread -- just like Array merge in PHP
  const allGames = [...myGames, ...latestGames];
  console.log(allGames);

  return (
    <div id="container">
      <h1 id="heading">Array Spread and Destructuring</h1>
    </div>
  );
};

export default App;
