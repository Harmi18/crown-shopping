import { combineReducers } from "redux";

import { userReducer } from "./user/userReducers";
import { categoriesReducer } from "./categories/categoryReducers";
import { cartReducer } from "./cart/cartReducers";

export const rootReducer = combineReducers({
  users: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
