import React from "react";

const Closure = () => {
  // Closure :- A closure is a feature in Javascript where an inner function has access to the outer (enclosing).

  // In JS once a function completes its execution, any variables that are defined inside the function scope cease to exist

  // In this if we call only inner function then as per function it does not print value of a and b addtion as b is not defined in it , but due to closure property it executes the inner function .

  // This feature is called closure , it preserves the space of outer variable b.
  // It preserves the variable that it going to use from the outer function.
  // This variable that it access are called scope chain.
  function outer() {
    let b = 10;

    function inner() {
      let a = 20;
      console.log(a + b);
    }

    return inner;
  }
  return <div></div>;
};

export default Closure;
