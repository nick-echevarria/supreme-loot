import { CategoryType } from '../../models/category';

type DirectoryItemProps = {
  category: CategoryType;
};

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
};

export default DirectoryItem;
