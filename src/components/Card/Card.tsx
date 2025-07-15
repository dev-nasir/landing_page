import "./styles.css";
import "../../assets/images/menu-bg-4.png";
type Props = {
  title: string;
  description: string;
  logo: string;
};

const Card = (props: Props) => {
  const { title, description, logo } = props;
  return (
    <div className="card">
      <img className="card-image" src={logo} alt="card" />
      <div className="card-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="cards-flex">
            <img className="cards-image" src={logo} alt="cards" />
            <div className="heading"><h2>{title}</h2></div>
            <div className="button"><p>{description}</p></div>
            </div> */
}
