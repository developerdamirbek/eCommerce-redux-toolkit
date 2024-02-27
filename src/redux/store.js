import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer'; 

export default configureStore({
  reducer: {
    cart: cartReducer, 
  },
});
