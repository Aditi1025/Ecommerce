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
            id="61008094"
            title="Naughty Ninos Girl's Cotton Dungaree Maxi Overalls"
            price={632}
            rating={4}
            image="https://m.media-amazon.com/images/I/61TL3xV30WL._UY741_.jpg"
          />
          <Product
            id="73108094"
            title="A.T.U.N. (ALL THINGS UBER NICE) Girl's Knee-Length Dress"
            price={560}
            rating={3}
            image="https://m.media-amazon.com/images/I/61ZiWXLeIML._UY741_.jpg"
          />
          <Product
            id="92008094"
            title="AJ Dezines® Kids Indo Western Sherwani Set For Boys"
            price={790}
            rating={5}
            image="https://m.media-amazon.com/images/I/81AOjNo1AyL._UY741_.jpg"
          />

        </div>

        <div className="home__row">
        <Product
            id="49008094"
            title="Adiva® Girls Midi, knee length, pink color along with tshirt"
            price={462}
            rating={4}
            image="https://m.media-amazon.com/images/I/5147PHYBReL._UY741_.jpg"
          />
          <Product
            id="49008001"
            title="Dress for Boys, Set of Coat, Pant & Shirt, Ideal for Wedding and Birthday."
            price={592}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Bs8dETthL._UX679_.jpg"
          />
          <Product
            id="39118094"
            title="StyloBug Girl's Polyester Floral Printed Round Neck Short Sleeves A-Line"
            price={730}
            rating={5}
            image="https://m.media-amazon.com/images/I/61-bstcON9L._UX679_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;