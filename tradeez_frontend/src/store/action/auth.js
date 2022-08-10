import axios from "axios";
import {
  LOGIN_INPROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "./actionTypes.js";

const loginProcessing = () => {
  return {
    type: LOGIN_INPROGRESS,
  };
};

export const loginSuccess = (token, user) => {
  localStorage.setItem("token", token);
  return {
    type: LOGIN_SUCCESS,
    payload: { user },
  };
};

const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: { error },
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};

export const login = (data) => {
  return (dispatch) => {
    dispatch(loginProcessing());
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}login`,
      data: {
        email: data.email,
        password: data.password,
        type: data.type,
      },
    })
      .then((response) => {
        const user = {
          name: response.data.name,
          id: response.data.id,
          email: response.data.email,
          type: response.data.userType,
          token: response.data.token,
          kycDone: true,
        };
        dispatch(loginSuccess(response.data.token, user));
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};

export const signup = (data) => {
  return (dispatch) => {
    dispatch(loginProcessing());
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}signup`,
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        type: data.type,
      },
    })
      .then((response) => {
        const user = {
          name: response.data.name,
          id: response.data.id,
          email: response.data.email,
          type: response.data.type,
        };
        dispatch(loginSuccess(response.data.token, user));
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch(logoutUser());
  };
};
