import { takeLatest, call, put, all } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/Firebase/Firebase";

import { fetchCategorySuccess, fetchCategoryFailed } from "./categoryActions";

import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArr = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategorySuccess(categoriesArr));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
