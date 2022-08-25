import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { useSelector } from "react-redux";
import CartDropdown from "../../components/Cart-Dropdown/cart-Dropdown";
import CartIcon from "../../components/Cart-Icon/Cart-Icon";

import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";

import { signOutuser } from "../../utils/Firebase/Firebase";

import { ReactComponent as CrwnLogo } from "../../assets/logo.svg";

import "./Navigation.style.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
