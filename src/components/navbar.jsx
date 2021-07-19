import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/techmart_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5 p-0 fixed-top">
      <div className="container-fluid">
        <Link onClick={scrollToTop} className="navbar-brand mx-3" to="/home">
          <img src={logo} style={{ width: "120px" }} alt="logo" />
        </Link>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarText"
          // aria-controls="navbarText"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                onClick={scrollToTop}
                className="nav-link mx-2"
                aria-current="page"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={scrollToTop}
                className="nav-link mx-2"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={scrollToTop}
                className="nav-link mx-2"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink onClick={scrollToTop} className="nav-link" to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
          <NavLink onClick={scrollToTop} className="nav-link mx-2" to="/login">
            <FontAwesomeIcon icon={faUser} /> Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
