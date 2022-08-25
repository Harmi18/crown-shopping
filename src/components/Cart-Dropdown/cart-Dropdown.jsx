import "./cart-Dropdown.style.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../Button-Component/ButtonComponent";
import CartItem from "../Cart-Item/Cart-Item";
import { selectCartItems } from "../../store/cart/cartSelector";

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
