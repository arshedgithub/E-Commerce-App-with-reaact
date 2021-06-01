import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagramSquare,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer py-2 bg-secondary text-light">
      <div className="footer-content mx-5">
        <div className="container row">
          <div className="col-5 p-3">
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
          <div className="col p-3">
            <h5>Help & Support</h5>
            <div className="about-list">
              <NavLink
                onClick={scrollToTop()}
                className="nav-link text-light"
                to="/contact"
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
          <div className="col p-3">
            <h5>About us</h5>
            <div className="about-list">
              <NavLink
                onClick={scrollToTop()}
                className="nav-link text-light"
                to="/about"
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
        <div class="text-center">Copyright &copy; Arshed Ahmed</div>
      </div>
    </div>
  );
};

export default Footer;
