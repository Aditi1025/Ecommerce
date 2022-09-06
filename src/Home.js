import React from "react";
import "./Home.css";
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
            id="49538094"
            title="EYEBOGLER Men's Polo Striped Regular Fit T-Shirt-(T285HS-PP)"
            price={662}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Mw4M+mHwL._UX569_.jpg"
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
            title="Diverse Men Formal Shirt"
            price={798}
            rating={5}
            image="https://m.media-amazon.com/images/I/81vuqr1DAtL._UY550_.jpg"
          />
         <Product
            id="49538088"
            title="Misto Vagon Women and Girls Pencil Heel Casual Sandal"
            price={600}
            rating={4}
            image="https://m.media-amazon.com/images/I/616gcguOH+L._UY625_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;