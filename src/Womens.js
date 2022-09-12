import React from "react";
import "./Mens.css";
import Product from "./Product";
import logo from "./logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={logo}
          alt=""
        />
        
        <div className="home__row">
          <Product
            id="12321341"
            title="Lymio Women's Polyester Short A-Line Dress"
            price={999}
            rating={4}
            image="https://m.media-amazon.com/images/I/7122Zr2GkrL._UY741_.jpg"
          />
          <Product
            id="49538055"
            title="GRECIILOOKS Western Dresses for Women |A-Line Knee-Length Dress | Indo Western Dress for Women| Short Dress"
            price={867}
            rating={4}
            image="https://m.media-amazon.com/images/I/71SJm8Q8C5L._UY741_.jpg"
          />
          <Product
            id="49531194"
            title="Maayrah Enterprises Trendy Graceful Crepe Butterfly Middi Dresses For Woman's"
            price={522}
            rating={4}
            image="https://m.media-amazon.com/images/I/51UTvT5IhlL.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="OOMPH! Women's Crepe A-Line Maxi Dress (Smocked}or"
            price={898.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81PNeTkEIFL._UY741_.jpg"
          />
          <Product
            id="23445930"
            title="SHREE HARIKRISHNA PRINTS Women Floral Long Dress for Women Stylish Latest Western Dresses)"
            price={658}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Cy8SVb9+L._UX679_.jpg"
          />
         <Product
            id="49538088"
            title="Lymio Women's Square Neck Long Sleeve Polyester Dress"
            price={655}
            rating={4}
            image="https://m.media-amazon.com/images/I/61LLVU45xtL._UY741_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49112350"
            title="ishin Women's Pure Cotton Off White Zari Embroidered A-Line Dress"
            price={1499}
            rating={5}
            image="https://m.media-amazon.com/images/I/4157Kl1NTjL.jpg"
          />
          <Product
            id="23448830"
            title="Lymio Dresses for Women | A-Line Dress | Stylish Dress for Women| Short Dress"
            price={598}
            rating={4}
            image="https://m.media-amazon.com/images/I/81IBQ0Jl08L._UY741_.jpg"
          />
         <Product
            id="4953844"
            title="Lymio Women's Cotton A-Line Below The Knee Dress"
            price={600}
            rating={3}
            image="https://m.media-amazon.com/images/I/71ytuBUUhSL._UY741_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;