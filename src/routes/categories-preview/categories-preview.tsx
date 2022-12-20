import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../stores/context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview';

const CategoriesPreview: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
