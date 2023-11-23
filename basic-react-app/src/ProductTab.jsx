import React from "react";
import Product from "./Product";

const ProductTab = () => {
  // const arr = ["product1","product2"];
  // similarly we can also pass the array in the argument

  let styles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  };
  return (
    <div style={styles}>
      {/* <Product title="laptop" price={40000} />
      <Product title="mobile" price={20000} />
      <Product title="pen" price={10} /> */}

      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Petronics tod 23" idx={3} />
    </div>
  );
};

export default ProductTab;
