import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import auth from "./auth";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import productDetails from "./productDetails";

export default combineReducers({
  todos,
  visibilityFilter,
  productDetails,

  // nested persisted reducer to blacklist loading property from persisting.
  // This blacklisting is important to prevent this use case:
  // 1- user click login
  // 2- user close the tabbefore the response came up
  // 3- now the user is stuck with loading:true since state is persisted using redux-persist
  auth: persistReducer(
    {
      key: "auth",
      storage,
      blacklist: ["loading"],
    },
    auth
  ),
});
