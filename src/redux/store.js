// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer';
import { loadState, saveState } from '../lib/storage';

const persistedState = loadState('products');

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState('products', store.getState());
});

export default store;
