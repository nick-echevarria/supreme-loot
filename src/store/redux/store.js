import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//incorporate logger to more easily keep track of pre- and post- state changes
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
