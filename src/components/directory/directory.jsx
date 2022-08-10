import CategoryItem from "../category/category-item";

import "./directory.style.scss";

const directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            <CategoryItem key={category.id} category={category} />
          </div>
        );
      })}
    </div>
  );
};

export default directory;
