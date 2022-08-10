import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartDropdown from "../../components/Cart-Dropdown/cart-Dropdown";
import CartIcon from "../../components/Cart-Icon/Cart-Icon";

import { UserContext } from "../../Contexts/userContexts";
import { CartContext } from "../../Contexts/CartContext";
import { signOutuser } from "../../utils/Firebase/Firebase";

import { ReactComponent as CrwnLogo } from "../../assets/logo.svg";

import "./Navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <CrwnLogo />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutuser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
