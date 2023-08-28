import { ADD_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action is calling", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
