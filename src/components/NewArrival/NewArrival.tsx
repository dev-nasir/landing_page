import logo3 from "../../assets//images/New-Arrival.webp";
import "./styles.css";
const NewArrival = () => {
  return (
    <>
      <div className="arrival-text">
        <h2>NEW ARRIVAL</h2>
      </div>
      <div className="center-wrapper">
        <img src={logo3} alt="arrival" className="arrival-img" />
      </div>
    </>
  );
};

export default NewArrival;
