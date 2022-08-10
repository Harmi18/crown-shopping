import { useContext } from "react";

import ProductCard from "../../components/Product-Card/Product-Card";

import { ProductsContext } from "../../Contexts/ProductContext";

import "./Shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
