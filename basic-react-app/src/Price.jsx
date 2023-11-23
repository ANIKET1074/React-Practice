import React from "react";

const Price = ({ oldPrice, newPrice }) => {
  let styles = {
    textDecoration: "line-through",
  };

  let boldStyle = {
    fontWeight: "bold",
  };

  let bgColor = {
    backgroundColor: "#e0c367",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    paddingTop: "5px",
  };
  return (
    <div style={bgColor}>
      <span style={styles}>{oldPrice}</span>
      &nbsp; &nbsp;
      <span style={boldStyle}>{newPrice}</span>
    </div>
  );
};

export default Price;
