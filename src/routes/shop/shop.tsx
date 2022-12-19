import { useContext } from 'react';

import { CategoriesContext } from '../../stores/context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview';

const Shop: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        console.log('KEY', products);
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;
