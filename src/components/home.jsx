import React, { Component } from "react";
import sld1 from "../assets/img/slide1.png";
import sld2 from "../assets/img/slide2.jpg";
import sld3 from "../assets/img/slide3.jpg";

const Home = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide bg-danger"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sld2} className="d-block w-100" alt="slide1" />
        </div>
        <div className="carousel-item">
          <img src={sld1} className="d-block w-100" alt="slide2" />
        </div>
        <div className="carousel-item">
          <img src={sld3} className="d-block w-100" alt="slide3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
