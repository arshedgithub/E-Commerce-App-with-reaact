import React from "react";
import bg1 from "../assets/img/home1.png";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col bg1">
          <img src={bg1} className="w-100" alt="background" />
        </div>
        <div className="col text-center">
          <h5 className="home mt-5">
            Larges laptop store in Sri Lanka. <br />
            Best prices & Leading branded <br />
            Desktops, Laptops, Tablets, <br /> Mobile phones and Other IT
            products
          </h5>
          <Link to="/products">
            <button className="btn btn-primary px-4 my-5">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="row cards">
        <div className="col card m-2">
          <img src={card1} alt="card1" className="card-img-top" />
          <h5 className="p-3">Laptops</h5>
        </div>
        <div className="col card m-2">
          <h5 className="p-3">Mobile Phones</h5>
          <img src={card2} alt="card2" className="card-img-top" />
        </div>
        <div className="col card m-2">
          <img src={card3} alt="card3" className="card-img-top" />
          <h5 className="p-3">PC computers</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
