import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/Firebase/Firebase";
import { setCategoriesMap } from "../../store/categories/categoryActions";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArr = await getCategoriesAndDocuments("categories");
      console.log("hhhhhhh", categoriesArr);
      dispatch(setCategoriesMap(categoriesArr));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
