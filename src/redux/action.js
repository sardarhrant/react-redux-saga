import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("addToCart action is calling", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.warn("remove action called", data);

  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.warn("emptyCart action called");
  return {
    type: EMPTY_CART,
  };
};
