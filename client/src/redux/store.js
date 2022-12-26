import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

//combined reducers for cart persistence
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

//creating a global store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
