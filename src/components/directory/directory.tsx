import DirectoryItem from '../directory-item/directory-item';
import { CategoryType } from '../../models/category';

type DirectoryProps = {
  categories: CategoryType[];
};

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
