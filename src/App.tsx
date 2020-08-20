import React from "react";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";

import { Routes } from "./router";
import store from "./redux/store";

import "react-sweet-progress/lib/style.css";
import "video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/styles.scss";

import setAuthData from "./utils/setAuthData";
import setAuthToken from "./utils/setAuthToken";
import { actions } from "./components/Auth";


if (localStorage.jwtToken) {
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(actions.authSuccess(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("jwtToken");
    store.dispatch(actions.authSuccess({}));
    window.location.href = "/";
  }
}


function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
