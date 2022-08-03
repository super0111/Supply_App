import AppRoutes from "./route/index";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import { logout } from "./store/action/auth";

import axios from "axios";

import store from "./store/store";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

let persistor = persistStore(store);

function App() {
// react-elastic-carousel

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
