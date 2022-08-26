import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/Firebase/Firebase";

export const fetchCategoryStart = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, categories);

export const fetchCategorySuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArr);

export const fetchCategoryFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchcategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categoriesArr = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategorySuccess(categoriesArr));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};
