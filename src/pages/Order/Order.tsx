import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./styles.css";
import Slider from "../../components/Slider/Slider";
import logo1 from "../../assets/images/Tao-web-banner-1.webp";
import logo2 from "../../assets/images/Tao-web-banner-2.webp";
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/Searchbar/Searchbar";
import MenuCard from "../../components/Menu-card/MenuCard";
import FoodCard from "../../components/FoodCard/FoodCard";
import ComboCard from "../../components/DeliveryCard/DeliveryCard";
import Starter from "../../components/Starter/Starter";
import NewArrival from "../../components/NewArrival/NewArrival";
import BestSeller from "../../components/BestSeller/BestSeller";

const Order = () => {
  const sliderImages = [logo1, logo2];
  return (
    <>
      
        <div className="icon-2">
          <button className="btn">
            <FaPhoneAlt />
            <span>0213-8899999</span>
          </button>
          <div className="cart">
            <FaCartShopping />
          </div>
        </div>
        <Slider image={sliderImages} style={{ height: "60vh" }} />
        <Menu />
        <SearchBar />
        <MenuCard />
        <NewArrival />
        <FoodCard />
        <ComboCard />
        <Starter />
        <BestSeller/>
      
    </>
  );
};

export default Order;
