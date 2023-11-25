import React from "react";

const Button = ({ action }) => {
  return (
    <>
      <button onClick={action}>Buy New Ticket</button>
    </>
  );
};

export default Button;
