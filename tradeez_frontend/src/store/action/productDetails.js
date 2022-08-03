import {
  SELECTED_CATEGORIES,
  SELECTED_PRODUCT,
  SELECTED_SUB_PRODUCT,
} from "./actionTypes.js";

export const selectedCategory = (text) => ({
  type: SELECTED_CATEGORIES,
  payload: text,
});

export const selectedProduct = (text) => ({
  type: SELECTED_PRODUCT,
  payload: text,
});

export const selectedSubProduct = (text) => ({
  type: SELECTED_SUB_PRODUCT,
  payload: text,
});
