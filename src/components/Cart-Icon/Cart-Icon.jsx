import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { ReactComponent as ShoppingIcon } from "../../assets/Shopping-bag.svg";
import "./Cart-Icon.style.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
