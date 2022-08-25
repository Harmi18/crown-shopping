import { combineReducers } from "redux";

import { userReducer } from "./user/userReducers";
import { categoriesReducer } from "./categories/categoryReducers";
import { cartReducer } from "./cart/cartReducers";

export const rootReducers = combineReducers({
  users: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
