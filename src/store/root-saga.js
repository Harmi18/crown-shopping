import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categorySaga";
import { userSagas } from "./user/userSaga";

export function* rootSagas() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
