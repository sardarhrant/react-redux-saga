import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART reducer calld in condition", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      data.length ? (data.length = data.length - 1) : (data.length = 0);
      console.warn("REMOVE_FROM_CART reducer calld in condition", action);
      return [...data];
    case EMPTY_CART:
      data = [];
      console.warn("EMPTY_CART reducer calld in condition", action);
      return data;
    default:
      return data;
  }
};
