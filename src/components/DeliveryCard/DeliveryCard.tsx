import "./styles.css";
import combo1 from "../../assets/images/combo1.webp"; // replace with real image
import combo2 from "../../assets/images/combo2.webp";
import combo3 from "../../assets/images/combo3.webp";
import logo4 from "../../assets//images/Banner-Ramadan.webp";

const combos = [
  {
    title: "Family Combo",
    desc: "Any 2 Appetizer/ Salad, Any 4 Chicken Main Courses, Any 2...",
    price: "Rs. 4499",
    img: combo1,
    tag: "🔥 Hot Selling",
  },
  {
    title: "Express Combo 1",
    desc: "This deal contains 1 Appetizer/Salad, 1 Main Course...",
    price: "Rs. 2499",
    img: combo2,
  },
  {
    title: "Express Combo 2",
    desc: "This deal contains 1 Appetizer/Salad, 2 Main...",
    price: "Rs. 3199",
    img: combo3,
  },
];

const ComboCard = () => {
  return (
    <>
      <div className="delivery-text">
        <h2>Delivery Combos</h2>
      </div>
      <div className="center-wrapper">
        <img src={logo4} alt="delivery-combos" className="delivery-img" />
      </div>

      <div className="combo-container">
        {combos.map((item, index) => (
          <div className="combo-card" key={index}>
            <div className="combo-img-wrap">
              <img src={item.img} alt={item.title} className="combo-img" />
              {item.tag && <span className="combo-badge">{item.tag}</span>}
            </div>
            <div className="combo-body">
              <h3 className="combo-title">{item.title}</h3>
              <p className="combo-desc">{item.desc}</p>
              <div className="combo-actions">
                <span className="combo-price">{item.price}</span>
                <button className="combo-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComboCard;
