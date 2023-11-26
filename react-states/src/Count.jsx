import React, { useEffect, useState } from "react";

const Count = () => {
  const [countx, setCountx] = useState(0);
  const [county, setCounty] = useState(0);

  const IncCountx = () => {
    setCountx(countx + 1);
  };

  const IncCounty = () => {
    setCounty(county + 1);
  };

  // 2 Parameters => 1 is function or setup and 2 is dependencies they are nothing but state variables

  // In This second parameter we can do it in 2 ways by defining specific state or if we want to render the component only once while first time page renders , then simply apply "[]" .
  useEffect(
    function renderEverytime() {
      console.log(
        "This will execute everytime when component re-render or This is also called side-effect"
      );
    },
    // This will execute only when countx changes
    [countx]
  );

  // This will render only first time when page loads
  // },[]);
  return (
    <div>
      <div>Countx = {countx}</div>
      <br />
      <button onClick={IncCountx}>+1</button>
      <br />
      <br />
      <br />
      <div>County = {county}</div>
      <br />
      <button onClick={IncCounty}>+1</button>
    </div>
  );
};

export default Count;
