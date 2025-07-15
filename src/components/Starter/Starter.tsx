import logo5 from "../../assets//images/starts-img.webp";
import "./styles.css";
import img1 from "../../assets/images/starter-tao.webp";
import img2 from "../../assets/images/starter-2.webp";
import img3 from "../../assets/images/Spring-Rolls.webp";
import img4 from "../../assets/images/starter-4.webp";
import img5 from "../../assets/images/Nana-wings-5.webp";
import img6 from "../../assets/images/starter-6.webp";
import img7 from "../../assets/images/starter-6.webp";
import img8 from "../../assets/images/starter-7.webp";
import img9 from "../../assets/images/starter-9.webp";
import img10 from "../../assets/images/Gyoza-10.webp";

const starterItems = [
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
  {
    title: "Gyoza",
    desc: "Classic Japanese pan-fried dumplings.",
    price: "Rs. 1199",
    img: img6,
  },
  {
    title: "Gyoza",
    desc: "Classic Japanese pan-fried dumplings.",
    price: "Rs. 1199",
    img: img7,
  },
  {
    title: "Gyoza",
    desc: "Classic Japanese pan-fried dumplings.",
    price: "Rs. 1199",
    img: img8,
  },
  {
    title: "Gyoza",
    desc: "Classic Japanese pan-fried dumplings.",
    price: "Rs. 1199",
    img: img9,
  },
  {
    title: "Gyoza",
    desc: "Classic Japanese pan-fried dumplings.",
    price: "Rs. 1199",
    img: img10,
  },
];
const Starter = () => {
  return (
    <>

        <div className="starter-text">
          <h2>Starter</h2>
        </div>
        <div className="center-wrapper">
          <img src={logo5} alt="starter" className="starter-pic" />
        </div>
        <div className="starter-container">
          {starterItems.map((item, idx) => (
            <div className="starter" key={idx}>
              <div className="starter-img-wrap">
                <img src={item.img} alt={item.title} className="starter-img" />
                {item.tag && <span className="starter-tag">{item.tag}</span>}
              </div>
              <div className="starter-body">
                <h3 className="starter-title">{item.title}</h3>
                <p className="starter-desc">{item.desc}</p>
                <div className="starter-actions">
                  <span className="starter-price">{item.price}</span>
                  <button className="starter-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </>
  );
};

export default Starter;
