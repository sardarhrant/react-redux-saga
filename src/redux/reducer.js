import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.warn("reducer calld in condition", action);
    return data;
  } else {
    return "no action call";
  }
};
