import "./MenuItem.css";
import { useState, useContext } from "react";
import NumberInput from "@components/NumberInput/NumberInput";
import CartItemsContext from '@context/CartItemsContext/CartItemsContext';


export default function MenuItem({
  name,
  price,
  hot_item = false,
  sold_out = false,
}) {
  const [amount, setAmount] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const {onItemChange} = useContext(CartItemsContext)

  function handleIncreaseCount(amt) {
    if (amount <= 0 && amt < 0 ||
      amt == 0) {
      return;
    }

    setAmount(amt);
  }

  function handleAddItemClick() {
    onItemChange({ name, price, amount });
    setAmount(0);
  }

  return (
    <div
      className={`menu-item${hot_item ? " hot-item" : ""}${sold_out ? " sold-out" : ""}`}
    >
      <div className="item-image-container">
        <img
          className={`item-image${isImageLoading ? " loading" : ""}`}
          onLoad={() => setIsImageLoading(false)}
          src="https://picsum.photos/400/400"
          alt="Menu Item Image"
        />
      </div>
      <div className="item-details">
        <div className="name-and-price">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <div className="item-cart-section">
          {(sold_out && <p className="centered-text">Sold out</p>) || (
            <>
              <NumberInput
                count={amount}
                changeNumberFunction={handleIncreaseCount}
              />
              <button
                type="button"
                className="page-button"
                onClick={handleAddItemClick}
              >
                Add to cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
