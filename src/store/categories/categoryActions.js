import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoryStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategorySuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArr);

export const fetchCategoryFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
