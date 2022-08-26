import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoryStart = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, categories);

export const fetchCategoriesSuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArr);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
