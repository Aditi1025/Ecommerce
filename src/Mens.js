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
            id="49084783"
            title="GLORYBOYZ Men's Cotton Regular Fit Short Sleeve Big Checks Chambray Shirt"
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/I/81VRriaaWgL._UY741_.jpg"
          />
          <Product
            id="100847387"
            title="Destiny Fashion Men's Slim Fit Casual Shirt"
            price={479}
            rating={3}
            image="https://m.media-amazon.com/images/I/71qTbVnVZZL._UY741_.jpg"
          />
          <Product
            id="398728094"
            title="Dennis Lingo Men Shirt"
            price={652}
            rating={5}
            image="https://m.media-amazon.com/images/I/618Wek95laS._UY741_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="76508094"
            title="Dennis Lingo Men's Slim Fit Casual Shirt"
            price={632}
            rating={4}
            image="https://m.media-amazon.com/images/I/61o-uF0ObRL._UX679_.jpg"
          />
          <Product
            id="87108094"
            title="Diverse Men's Regular Fit Formal Shirt"
            price={420}
            rating={3}
            image="https://m.media-amazon.com/images/I/81vuqr1DAtL._UX569_.jpg"
          />
          <Product
            id="32108094"
            title="Diverse Men's Regular Fit Formal Shirt"
            price={290}
            rating={3}
            image="https://m.media-amazon.com/images/I/81h5dB3vKKL._SX569._SX._UX._SY._UY_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;