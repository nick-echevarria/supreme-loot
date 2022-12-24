import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from '../../utils/middleware/logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  //primary persistence benefit is with cart
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//incorporate custom logger to accurately track of pre- and post- state changes
//note: .filter(Boolean) is to avoid falsy return, instead returning empty array, therefore not breaking everything
const middlewares = [
  import.meta.env.MODE !== 'production' && loggerMiddleware,
  thunk
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

export const persistor = persistStore(store);
