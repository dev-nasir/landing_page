import logo1 from "../../assets//images/Best-Seller.webp";
import "./styles.css";
import seller1 from "../../assets//images/seller-Bento-Box.webp";

const Seller = [
  {
    title: "Bento Box(Serves 2)",
    desc: "Pick any 1 x Starter and 2 x Main Courses of your choice with complimentary rice.",
    price: "Rs. 2650",
    img: seller1,
    tag: "New Arrival",
  },
];
const BestSeller = () => {
  return (
    <>
      <div className="seller-text">
        <h2>Best-seller</h2>
      </div>
      <div className="center-wrapper">
        <img src={logo1} alt="seller" className="seller-pic" />
      </div>
      <div className="seller-container">
        {Seller.map((item, index) => (
          <div className="seller-card" key={index}>
            <div className="seller-img-wrap">
              <img src={item.img} alt={item.title} className="seller-img" />
              {item.tag && <span className="seller-badge">{item.tag}</span>}
            </div>
            <div className="seller-body">
              <h3 className="seller-title">{item.title}</h3>
              <p className="seller-desc">{item.desc}</p>
              <div className="seller-actions">
                <span className="seller-price">{item.price}</span>
                <button className="seller-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSeller;
