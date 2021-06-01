import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer py-3 bg-light">
      <div className="footer-content mx-5">
        <div class="container row">
          <div className="col">
            <h4>Follow us</h4>
          </div>
          <div className="col">
            <h4>Help & Support</h4>
            <ul className="about-list">
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Safe payment</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>About us</h4>
            <ul className="about-list">
              <li>
                <Link to="/about#">About us</Link>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-muted" />
        <div class="text-muted text-center">Copyright &copy; Arshed Ahmed</div>
      </div>
    </div>
  );
};

export default Footer;
