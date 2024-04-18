// display items in cart here
import CartItem from "@components/CartItem/CartItem";
import CartItemsContext from "@context/CartItemsContext/CartItemsContext";
import { useContext, useState, useEffect } from "react";
import "./CartPage.css";
import CartCheckout from "@components/CartCheckout/CartCheckout";

export default function CartPage() {
  const [totals, setTotals] = useState(true);

  const { itemsInCart, onItemChange } = useContext(CartItemsContext);

  const itemsInCartPageItems = Object.keys(itemsInCart).map((key) => {
    return (
      <CartItem key={key} item={itemsInCart[key]} onItemChange={onItemChange} />
    );
  });

  useEffect(() => {
    function loadTotals() {
      let totalItems = 0;
      let totalPrice = 0;

      const itemsArray = Object.keys(itemsInCart).map((key) => {
        return itemsInCart[key];
      });

      for (let i = 0; i < itemsArray.length; i++) {
        totalPrice += itemsArray[i].price * itemsArray[i].amount;
        totalItems += itemsArray[i].amount;
      }

      const newTotals = {
        totalItems,
        totalPrice,
      };

      setTotals(newTotals);
    }

    loadTotals();
  }, [itemsInCart]);

  return (
    <main className="cart-page">
      <div className="cart-page-container">
        <section className="cart-section">
          <h1 className="centered-text">Cart</h1>
          <div className="cart-items-div">
            {(itemsInCartPageItems.length === 0 && (
              <p className="centered-text">
                No items are currently in your cart.
              </p>
            )) ||
              itemsInCartPageItems}
          </div>
        </section>
        <CartCheckout totals={totals} />
      </div>
    </main>
  );
}
