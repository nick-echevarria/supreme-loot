import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from '../../utils/middleware/logger';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '../root-saga';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  //primary persistence benefit is with cart
  whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

//incorporate custom logger to accurately track of pre- and post- state changes
//note: .filter(Boolean) is to avoid falsy return, instead returning empty array, therefore not breaking everything
const middlewares = [
  import.meta.env.MODE !== 'production' && loggerMiddleware,
  sagaMiddleware
].filter(Boolean);

const composeEnhancer =
  (import.meta.env.MODE !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
