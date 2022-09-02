import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEffect } from "react";

import Home from "./routes/Home/home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/shop/Shop-Component";
import Checkout from "./routes/CheckOut/Checkout";
import { checkUserSession } from "./store/user/userActions";

/* eslint-disable */

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
