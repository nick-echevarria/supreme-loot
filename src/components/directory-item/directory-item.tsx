import { CategoryType } from '../../models/category';
import { useNavigate } from 'react-router-dom';

type DirectoryItemProps = {
  category: CategoryType;
};

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
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
