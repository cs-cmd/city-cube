import "./CartCheckout.css";

export default function CartCheckout({ totals }) {
  return (
    <div className="cart-checkout">
      <h1>Order summary</h1>
      <div className="totals-line">
        <p>Total Items: {totals.totalItems}</p>
        <p>Total Price &#40;pre-tax&#41;: ${totals.totalPrice}</p>
      </div>
      <button className="page-button call-to-action">Order</button>
    </div>
  );
}
