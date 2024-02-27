// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer';
import { loadState, saveState } from '../lib/storage';

const persistedState = loadState('reduxState');

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState('reduxState', store.getState());
});

export default store;
