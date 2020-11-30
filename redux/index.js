import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './combinedReducers';
import {persistStore, persistReducer} from 'redux-persist';
// import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'user', 'whiteCommonData'], //only navigation will be persisted
};
const initialState = {};

const middleWare = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
middleWare.push(createLogger());

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  persistedReducer,
  // undefined,
  composeEnhancers(applyMiddleware(...middleWare)),
);

export const persistor = persistStore(store);
