import React from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";

const Board = () => {
  const initialValue = Array(9).fill(null);
  const [squareValue, setSquareValue] = React.useState(initialValue);
  const [next, setNext] = React.useState(true);

  const handleClick = (i) => {
    //create a new array to have immutability
    const newSquareValues = squareValue.slice();
    //check if there is a winner already before calling next player
    let winner = calculateWinner(newSquareValues);
    if (winner) return;
    //set each individual square to the value X or O
    newSquareValues[i] = next ? "X" : "O";
    //set state of the squareValue to have the above value
    setSquareValue(newSquareValues);
    setNext(!next);
  };

  const renderSquare = (i) => {
    return <Square value={squareValue[i]} onClick={() => handleClick(i)} />;
  };

  let winner = calculateWinner(squareValue);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player ${next ? "X" : "O"}`;
  }

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
