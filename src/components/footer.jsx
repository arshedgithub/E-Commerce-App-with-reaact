import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagramSquare,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="footer py-2 bg-secondary text-light">
      <div className="footer-content mx-3">
        <div className="d-flex flex-wrap">
          <div className="p-4 me-2 bd-highlight">
            <h4>Follow us</h4>
            <ul className="list-inline follow-list">
              <li className="list-inline-item p-1">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </li>
              <li className="list-inline-item p-1">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </li>
              <li className="list-inline-item p-1">
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </li>
              <li className="list-inline-item p-1">
                <FontAwesomeIcon icon={faFacebookMessenger} size="2x" />
              </li>
            </ul>
          </div>
          <div className="p-4 bd-highlight">
            <h5>Help & Support</h5>
            <div className="about-list">
              <NavLink
                className="nav-link text-light"
                to="/contact"
                onClick={scrollToTop}
              >
                Contact us
              </NavLink>
              <NavLink className="nav-link text-light" to="#">
                Help center
              </NavLink>
              <NavLink className="nav-link text-light" to="#">
                Safe payment
              </NavLink>
            </div>
          </div>
          <div className="p-4 bd-highlight">
            <h5>About us</h5>
            <div className="about-list">
              <NavLink
                className="nav-link text-light"
                to="/about"
                onClick={scrollToTop}
              >
                About us
              </NavLink>
              <NavLink className="nav-link text-light" to="#">
                Terms & Conditions
              </NavLink>
              <NavLink className="nav-link text-light" to="#">
                Privacy & Policy
              </NavLink>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">Copyright &copy; Arshed Ahmed</div>
      </div>
    </div>
  );
};

export default Footer;
