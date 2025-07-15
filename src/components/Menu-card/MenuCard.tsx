import "./styles.css";
import logo from "../../assets/images/header_img.png";
import logo1 from "../../assets/images/card-pic.webp";

const MenuCard = () => {
  return (
    
    
      <div className="menucard-container">
        <div className="menu-card">
          <h2 className="card-title">Crispy Beef</h2 >
          <img src={logo} alt="Dish" className="card-img" />
          <div className="card-body">
            <div className="price-box">
              <del className="old-price">Rs. 1499</del>
              <span className="new-price">Rs. 1049</span>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <h2 className="card-title">Szechuan Chicken</h2>
          <img src={logo} alt="Dish" className="card-img" />
          <div className="card-body">
            <div className="price-box">
              <del className="old-price">Rs. 1499</del>
              <span className="new-price">Rs. 1049</span>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <h2 className="card-title">Chilli Oyster fish</h2>
          <img src={logo} alt="Dish" className="card-img" />
          <div className="card-body">
            <div className="price-box">
              <del className="old-price">Rs. 1499</del>
              <span className="new-price">Rs. 1049</span>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <h2 className="card-title">Chowmein</h2>
          <img src={logo1} alt="Dish" className="card-pic" />
          <div className="card-body">
            <div className="price-box">
              <del className="old-price">Rs. 1499</del>
              <span className="new-price">Rs. 1049</span>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default MenuCard;
