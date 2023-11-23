import React from "react";

const Form = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form is submitted..");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write Something" />
      <button>Submit</button>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </form>
  );
};

export default Form;
