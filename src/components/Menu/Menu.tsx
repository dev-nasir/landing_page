import { Link } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="NEW ARRIVAL">NEW ARRIVAL</Link>
        </li>
        <li>
          <Link to="Delivary Combos">Delivary Combos</Link>
        </li>
        <li>
          <Link to="Startes">Startes</Link>
        </li>
        <li>
          <Link to="BEST SELLER">BEST SELLER</Link>
        </li>
        <li>
          <Link to="ALL YOU CAN EAT SUSHI">ALL YOU CAN EAT SUSHI</Link>
        </li>
        <li>
          <Link to="Beef Main Course">Beef Main Course</Link>
        </li>
        <li>
          <Link to="Chicken Main Course">Chicken Main Course</Link>
        </li>
        <li>
          <Link to="Soup">Soup</Link>
        </li>
        <li>
          <Link to="Salad">Salad</Link>
        </li>
          <li>
          <Link to="Fish And Seafood">Fish And Seafood</Link>
        </li>
          <li>
          <Link to="Rice And Noodle">Rice And Noodle</Link>
        </li>
          <li>
          <Link to="Drinks">Drinks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
