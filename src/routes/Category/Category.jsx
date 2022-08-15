import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/Product-Card/Product-Card";
import { CategoriesContext } from "../../Contexts/CategoriesContext";
import "./Category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { CategoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(CategoriesMap[category]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
