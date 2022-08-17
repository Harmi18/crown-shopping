import { combineReducers } from "redux";

import { userReducer } from "./user/userReducers";

export const rootReducers = combineReducers({
  users: userReducer,
});
