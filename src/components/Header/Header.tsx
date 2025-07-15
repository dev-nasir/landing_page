import { useState } from "react";
import logo from "../../assets/images/header_img.png";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // menu state

  const toggleMenu = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen); // toggle menu
  };

  return (
    <div className="header-wraper">
      <div className="header-container">
        <div className="image" style={{height:"91px"}}>
          <img src={logo} alt="Header" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu-items ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/">OUR JOURNEY</Link>
          </li>
          <li>
            <Link to="/order">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/location">LOCATION</Link>
          </li>
          <li>
            <Link to="/caterng">CATERING MENU</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
