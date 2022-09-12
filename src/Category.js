import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

function Category({image,url}) {
  return (
    <div className="category">
      <img src={image} alt="" />
      <Link to={url}>
      <button class="category__button">Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Category;