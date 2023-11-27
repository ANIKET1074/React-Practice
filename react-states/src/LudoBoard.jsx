import React, { useState } from "react";

const LudoBoard = () => {
  const [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
  // here we use object as an initial parameter.

  // Array and states
  const [arr, setArr] = useState(["moves"]);

  const updateBlue = () => {
    console.log(`Moves.blue : ${moves.blue}`);

    // This is called spread operator which indicates that new object is created with reference of old object
    // setMoves({ ...moves, blue: moves.blue + 1 });
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
    console.log(arr);
  };
  return (
    <div>
      <h2>Game Begins!</h2>
      <h2>{arr}</h2>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          1+
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow", color: "black" }}>
          1+
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }}>1+</button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }}>1+</button>
      </div>
    </div>
  );
};

export default LudoBoard;
