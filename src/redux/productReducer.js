import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  // small change
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("PRODUCT_LIST reducer calld in condition", action);
      return [...action.data];
    default:
      return data;
  }
};
