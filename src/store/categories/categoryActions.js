import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);
