import {
  LOGIN_FAILED,
  LOGIN_INPROGRESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action/actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: !!localStorage.getItem("token"),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INPROGRESS:
      return {
        loading: true,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGIN_FAILED:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
      };
    case LOGOUT:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
