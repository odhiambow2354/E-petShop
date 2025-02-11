import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.pet_shop_logo} alt="logo" className="logo" />
          <p>
            The best online pet shop platform, trusted and proven to be the most
            reliable of all time. Just one click away.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <a
              href="https://www.linkedin.com/in/wycliffe-omondi-933601266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Pet Supplies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>Address: 123, XYZ Street, ABC City, 12345</li>
            <li>Email: petshop@gmail.com</li>
            <li>Phone: 1234567890</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2025 PetShop E-Store. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
