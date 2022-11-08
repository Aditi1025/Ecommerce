import React from "react";
import "./Home.css";
import Product from "./Product";
import Category from "./Category";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import BootstrapCarouselComponent from "./BootstrapCarouselComponent";

function Home() {
  return (
    <div>
    <BootstrapCarouselComponent />
    
    <div className="home">
      <div className="home__container">
      <div className="home__trending">
      <a href="#"><img src="https://fontmeme.com/permalink/221108/6eea3e7b292e0d934e473ffe812f61f9.png" alt="kaushan-script-font" border="0"/></a>
        </div>
        <div className="home__row">
        <Category 
        image="/images/men1.jpeg"
        url="/mens"
        />
        <Category 
        image="/images/women1.jpeg"
        url="/womens"
        />
        <Category 
        image="/images/children2.jpeg"
        url="childs"/>
        </div>
        <div className="home__trending">
        <a href="#"><img src="https://fontmeme.com/permalink/221108/c5892f41f3cfbb085d6e2c8d0375660f.png" alt="kaushan-script-font" border="0"/></a>
        </div>

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
            image="/images/w1.png"
          />
          <Product
            id="49538094"
            title="EYEBOGLER Men's Polo Striped Regular Fit T-Shirt-(T285HS-PP)"
            price={662}
            rating={4}
            image="/images/m1.png"
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
            id="49112350"
            title="ishin Women's Pure Cotton Off White Zari Embroidered A-Line Dress"
            price={1499}
            rating={5}
            image="https://m.media-amazon.com/images/I/4157Kl1NTjL.jpg"
          />
          <Product
            id="23448830"
            title="Dennis Lingo Men Shirt- Men Formal Shirt"
            price={598}
            rating={4}
            image="https://m.media-amazon.com/images/I/61hq+LfAdOS._UY741_.jpg"
          />
         <Product
            id="4953844"
            title="Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt"
            price={600}
            rating={3}
            image="https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;