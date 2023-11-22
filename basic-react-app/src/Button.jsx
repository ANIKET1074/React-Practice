import React from "react";

const Button = () => {
  function handleClick() {
    console.log("Hello");
  }

  function handleMouseOver() {
    console.log("Bye!");
  }

  function handleDblClick() {
    console.log("Double Clicked!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, id.
      </p>
      <button onDoubleClick={handleDblClick}>Double Click me!</button>
    </div>
  );
};

export default Button;
