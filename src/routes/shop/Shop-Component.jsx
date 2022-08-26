import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";
import { useDispatch } from "react-redux";

import { fetchcategoriesAsync } from "../../store/categories/categoryActions";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
