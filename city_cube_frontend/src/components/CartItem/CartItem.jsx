import "./CartItem.css";
import CartItemsContext from "@context/CartItemsContext/CartItemsContext";
import { useContext } from "react";

export default function CartItem({ item, onItemChange }) {
  const { removeItem } = useContext(CartItemsContext);

  function handleButtonClick(amount) {
    if (item.amount + amount <= 0) {
      removeItem(item);
      return;
    }

    const newItem = {
      ...item,
      amount,
    };
    onItemChange(newItem);
  }

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <div className="total-item-price-line">
        <p>
          ${item.price}&nbsp;
          <span className="subscript">x {item.amount}</span>
        </p>

        <h3>${item.price * item.amount}</h3>
      </div>
      <div className="adjust-amount-buttons">
        <button onClick={() => handleButtonClick(-1)} className="page-button">
          -
        </button>
        <button onClick={() => handleButtonClick(1)} className="page-button">
          +
        </button>
      </div>
      <button
        className="page-button secondary"
        onClick={() => {
          removeItem(item);
        }}
      >
        Remove
      </button>
    </div>
  );
}
