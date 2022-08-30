import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categorySaga";

export function* rootSagas() {
  yield all([call(categoriesSaga)]);
}
