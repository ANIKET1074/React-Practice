import { useState } from "react";
import "./App.css";
import ProductTab from "./ProductTab";
import Button from "./Button";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Blockbustor deals | Shop Now</h2>
      {/* <ProductTab /> */}
      {/* <Button /> */}
      <Form />
    </>
  );
}

export default App;
