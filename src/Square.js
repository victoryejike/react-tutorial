import React from "react";

const Square = () => {
  const [value, setValue] = React.useState("");

  const handleClick = () => {
    setValue("X");
  };
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
};

export default Square;
