import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/Firebase/Firebase";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [CategoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // ADD DATA INTO FIREBASE
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });
  const value = { CategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
