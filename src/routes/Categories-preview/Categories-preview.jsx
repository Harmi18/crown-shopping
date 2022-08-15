import { useContext, Fragment } from "react";

import CategoryPreview from "../../components/category-preview/CategoryPreview";

import { CategoriesContext } from "../../Contexts/CategoriesContext";

const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
