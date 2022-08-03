import {
  SELECTED_CATEGORIES,
  SELECTED_PRODUCT,
  SELECTED_SUB_PRODUCT,
} from "../action/actionTypes";

const initialState = {
  selectedCategories: { name: "", value: "" },
  selectedProduct: { name: "", value: "" },
  selectedSubProduct: { name: "", value: "" },
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload,
      };
    case SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case SELECTED_SUB_PRODUCT:
      return {
        ...state,
        selectedSubProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productDetails;
