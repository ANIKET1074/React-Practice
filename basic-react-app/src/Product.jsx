import React from "react";
import "./Product.css";
import Price from "./Price";

// if some-times the props value is missing then we can pass the default by using { price = 1 }
// here destructing the object
// const Product = ({ title, price }) => {
const Product = ({ title, idx }) => {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    "8000 DPI",
    "intuitive surface",
    "designed for ipad pro",
    "wireless",
  ];
  return (
    <div className="Product">
      {/* <h2>{title}</h2>
      <h5>Price : {price}</h5> */}
      {/* Optimize way to write the ternary operator */}
      {/* {price > 30000 && <p>Discount of 5%</p>} */}

      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
};

export default Product;
