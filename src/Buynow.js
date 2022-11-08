import React from "react";
import "./Buynow.css";
import { Link } from "react-router-dom";

function Buynow({image,url}) {
  return (
    <div className="category">
      <img src={image} alt="" />
      <Link to={url}>
      <button class="category__button">Buy Now</button>
      </Link>
    </div>
  );
}

export default Buynow;