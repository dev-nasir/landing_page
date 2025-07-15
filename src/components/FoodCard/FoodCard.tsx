import "./styles.css";
import img1 from "../../assets/images/King-Prawn-Hargow-(1).webp";
import img2 from "../../assets/images/prawn-Dumplings-(2).webp";
import img3 from "../../assets/images/Shrimps-Dumplings-(3).webp";
import img4 from "../../assets/images/Bento-Box.webp";
import img5 from "../../assets/images/Gyoza-(1).webp";

const foodItems = [
  {
    title: "King Prawn Har Gao",
    desc: "Delicate, translucent prawn dumplings bursting with...",
    price: "Rs. 1299",
    img: img1,
  },
  {
    title: "Single Prawn Chicken Jiaozi",
    desc: "Single Prawn dumpling with heavenly texture & epic flavour.",
    price: "Rs. 1399",
    img: img2,
  },
  {
    title: "Double Prawn Shuijiao",
    desc: "Double Prawn dumpling with heavenly texture & epic flavour.",
    price: "Rs. 1299",
    img: img3,
  },
  {
    title: "Bento Box (Serves 2)",
    desc: "Pick any 1 x Starter and 2 x Main Courses of your choice with...",
    price: "Rs. 2650",
    img: img4,
  },
  {
    title: "Gyoza",
    desc: "Classic Japanese pan-fried dumplings.",
    price: "Rs. 1199",
    img: img5,
  },
];

const FoodCard = () => {
  return (
    <>
      <div className="container">
        <div className="food-container">
          {foodItems.map((item, idx) => (
            <div className="food" key={idx}>
              <div className="food-img-wrap">
                <img src={item.img} alt={item.title} className="food-img" />
                {item.tag && <span className="food-tag">{item.tag}</span>}
              </div>
              <div className="food-body">
                <h3 className="food-title">{item.title}</h3>
                <p className="food-desc">{item.desc}</p>
                <div className="food-actions">
                  <span className="food-price">{item.price}</span>
                  <button className="food-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
