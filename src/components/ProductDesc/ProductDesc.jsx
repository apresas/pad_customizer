import React from "react";
import "./productDesc.css";
import { IoStarSharp } from "react-icons/io5";

function ProductDesc() {
  return (
    <div className="productDesc_container">
      <div className="header_container">
        <h1>Uncommon Dagger Leg Pads</h1>
        <h2>$1,499.99</h2>
      </div>
      <div className="review_container">
        <div className="stars_container">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>
        <small>(2)</small>
      </div>
    </div>
  );
}

export default ProductDesc;
