import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  console.warn("addToCart action is calling");
  return {
    type: PRODUCT_LIST,
  };
};
