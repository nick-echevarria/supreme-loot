import { CategoryType } from '../../models/category';

type CategoryItemProps = {
  category: CategoryType;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
