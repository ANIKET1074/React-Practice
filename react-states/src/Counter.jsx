import React from "react";
import { useState } from "react";

const Counter = () => {
  function init() {
    console.log("init is invoked");
    return Math.floor(Math.random) * 2;
  }

  //   in this always pass init method with reference so don't use paranthesis .
  // as if we use paranthesis then it means render immediately.
  //   so in this init only render once.
  const [count, setCount] = useState(init); // this is initialization line so it does not render all time it executes at once.

  // In this the value of counter is updated during re-rendering the whole component
  // While in the function incCount() we see the difference of 1 as the value of count first is 1 and after re-rendering it gets updated.

  // The value of state variable is changed during rendering of the component or function.
  // We can access the value of state variable after re-rendering the component.

  // Callback in Updater function
  // 1) new-value depends on old-value :- use Callbacks to work it like synchronous
  // like
  // function incCount(){
  // setCount((count)=>{
  // return count+1;
  // })
  // setCount((count)=>{
  // return count+1;
  // })
  // }

  function incCount() {
    setCount(count + 1);
    // setCount(count + 1);
    // console.log(count = `${count}`);
    // return setCount;
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
};

export default Counter;
