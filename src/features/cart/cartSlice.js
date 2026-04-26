// import { createSlice } from "@reduxjs/toolkit";

/*
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // paload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // paload = pizzaId
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // paload = pizzaId
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
*/
const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "pizza margiritta",
      quantity: 2,
      unitPrice: 12,
      totalPrice: 24,
    },
    {
      pizzaId: 11,
      name: "pizza margiritta",
      quantity: 2,
      unitPrice: 12,
      totalPrice: 24,
    },
    {
      pizzaId: 13,
      name: "pizza margiritta",
      quantity: 2,
      unitPrice: 12,
      totalPrice: 24,
    },
  ],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // addItem => payload = newItem
    case "cart/addItem":
      return {
        cart: state.cart.concat(action.payload),
      };

    case "cart/deleteItem": {
      // payload = pizzaId
      const filteredCart = state.cart.filter(
        (item) => item.pizzaId !== action.payload,
      );
      return {
        cart: filteredCart,
      };
    }
    case "cart/increaseItemQuantity": {
      // payload = pizzaId
      const increasedCart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          };
        }
        return item;
      });
      return {
        cart: increasedCart,
      };
    }
    case "cart/decreaseItemQuantity": {
      // payload = pizzaId
      const decreasedCart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          };
        }
        return item;
      });
      return {
        cart: decreasedCart,
      };
    }
    case "cart/clearCart":
      return {
        cart: [],
      };
    default:
      return state;
  }
}

export function addItem(pizzaItem) {
  return {
    type: "cart/addItem",
    payload: {
      pizzaId: pizzaItem.pizzaId,
      name: pizzaItem.name,
      quantity: pizzaItem.quantity,
      unitPrice: pizzaItem.unitPrice,
      totalPrice: pizzaItem.totalPrice,
    },
  };
}

export function deleteItem(pizzaId) {
  return {
    type: "cart/deleteItem",
    payload: pizzaId,
  };
}

export function increaseItemQuantity(pizzaId) {
  return {
    type: "cart/increaseItemQuantity",
    payload: pizzaId,
  };
}

export function decreaseItemQuantity(pizzaId) {
  return {
    type: "cart/decreaseItemQuantity",
    payload: pizzaId,
  };
}

export function clearCart() {
  return {
    type: "cart/clearCart",
  };
}
