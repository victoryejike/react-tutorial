import React from "react";
import Square from "./Square";

const Board = () => {
  const renderSquare = (i) => {
    return <Square value={i} />;
  };

  const status = "Next Player: X";

  return (
    <>
      <p>{status}</p>
      <div className="board-row">
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </>
  );
};

export default Board;
