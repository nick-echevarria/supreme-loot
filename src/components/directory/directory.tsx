import CategoryItem from '../category/category-item';
import { CategoryType } from '../../models/category';

type DirectoryProps = {
  categories: CategoryType[];
};

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
