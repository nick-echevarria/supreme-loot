import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './redux/categories/category.saga';
import { userSagas } from './redux/user/user.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
