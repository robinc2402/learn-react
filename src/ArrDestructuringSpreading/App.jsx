import React from "react";

const App = () => {
  const myGames = ["RON", "COD", "NFS", "CS", "AC"];
  const latestGames = ["FarCry", "ResidentEvil", "Burnout", "GTA"];

  // Array spread -- just like Array merge in PHP
  const allGames = [...myGames, ...latestGames];
  console.log(allGames);

  // Array destrcture
  const [first, ...remaining] = latestGames;
  console.log(first);
  console.log(remaining);

  // array spread as a sub-array
  const everything = {
    id: 12,
    games: [...allGames],
    param1: 23
  };

  console.log(everything);

  return (
    <div id="container">
      <h1 id="heading">Array Spread and Destructuring</h1>
      <div>Destructure -- {JSON.stringify(first)}</div>
      <hr />
      <div>Spread -- {JSON.stringify(allGames)}</div>
      <hr />
      <div>Spread + Merge -- {JSON.stringify(everything)}</div>
    </div>
  );
};

export default App;
