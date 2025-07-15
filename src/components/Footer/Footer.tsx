import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "./styles.css";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        {/* Address */}
        <div className="footer-content">
          <h2>Address</h2>
          <p>7-C, Bukhari Commercial, Lane 13</p>
          <p>Khayaban-e-Bukhari, D.H.A, Phase 6,</p>
          <p>Karachi</p>
        </div>

        {/* Book a table */}
        <div className="footer-content">
          <h2>Book a table</h2>
          <p>To Book your authentic Pan Asian</p>
          <p>experience call:</p>
          <p>021-38899999</p>
        </div>

        {/* Opening hours */}
        <div className="footer-content">
          <h2>Opening hours</h2>
          <p>Monday - Sunday</p>
          <p>12:00 PM - 12:00 AM</p>
        </div>

        {/* Social Icons */}
        <div className="icon">
          <div className="fb-icon">
            <FaFacebook />
          </div>
          <div className="twitter-icon">
            <AiFillTwitterCircle />
          </div>
          <div className="insta-icon">
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div className="footer-menu1">
        <ul>
          <li>Menu</li>
          <li>Gallery</li>
          <li>Feedback</li>
        </ul>
        <div className="para">
          <p>© TAO 2025 . All rights reserved. Powered by Indolj.pk</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
