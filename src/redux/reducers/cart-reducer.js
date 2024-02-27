import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const { id } = action.payload;
        const existingProduct = state.items.find(item => item.id === id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    incrementQuantity: (state, action) => {
      const idToIncrement = action.payload;
      const itemToIncrement = state.items.find(item => item.id === idToIncrement);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const idToDecrement = action.payload;
      const itemToDecrement = state.items.find(item => item.id === idToDecrement);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
