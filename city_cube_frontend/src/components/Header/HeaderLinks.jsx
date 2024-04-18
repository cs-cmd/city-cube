import { Link } from "react-router-dom";
import ExpandingBorder from "@components/ExpandingBorder/ExpandingBorder";

export default function HeaderLinks({ numItemsInCart }) {
  return (
    <ul className="links">
      <li>
        <Link to="/" className="header-link">
          Home
          <ExpandingBorder />
        </Link>
      </li>
      <li>
        <Link to="/menu" className="header-link">
          Menu
          <ExpandingBorder />
        </Link>
      </li>
      <li>
        <Link to="/account" className="header-link">
          Account
          <ExpandingBorder />
        </Link>
      </li>
      <li className="cart-link">
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {numItemsInCart > 0 && (
            <span className="item-counter">
              {numItemsInCart >= 10 ? "9+" : numItemsInCart}
            </span>
          )}
        </Link>
      </li>
    </ul>
  );
}
