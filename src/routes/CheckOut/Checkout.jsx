import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

import CheckoutItem from "../../components/Chcekout-Item/CheckoutItem";

import "./Checkout.style.scss";

const Checkout = () => {
  const { cartItems, totalCount } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: {totalCount}</span>
    </div>
  );
};

export default Checkout;
