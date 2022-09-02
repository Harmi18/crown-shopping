import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";
import { useDispatch } from "react-redux";

import { fetchCategoryStart } from "../../store/categories/categoryActions";

/* eslint-disable */
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
