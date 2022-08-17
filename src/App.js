import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import { createAction } from "./utils/reducer/reducer.utils";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/Firebase/Firebase";
import Home from "./routes/Home/home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/shop/Shop-Component";
import Checkout from "./routes/CheckOut/Checkout";

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
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
