import React from "react";
import Square from "./Square";

const Board = () => {
  const initialValue = Array(9).fill(null);
  const [squareValue, setSquareValue] = React.useState(initialValue);
  const [next, setNext] = React.useState(true);

  const handleClick = (i) => {
    //create a new array to have immutability
    const newSquareValues = squareValue.slice();
    newSquareValues[i] = next ? "X" : "O";
    console.log(newSquareValues);
    setSquareValue(newSquareValues);
    setNext(!next);
  };

  const renderSquare = (i) => {
    return <Square value={squareValue[i]} onClick={() => handleClick(i)} />;
  };

  const status = "Next Player: X";

  return (
    <>
      <p>{status}</p>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
