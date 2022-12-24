import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading
} from '../../store/redux/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview';
import Spinner from '../../components/spinner/spinner';

const CategoriesPreview: React.FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
