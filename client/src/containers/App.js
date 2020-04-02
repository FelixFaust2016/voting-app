import React, { Component } from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";

// import api from "../services/api";
import { store } from "../store";
import { setCurrentUser, addError, setToken } from "../store/actions";
// import Auth from "../components/Auth";
// import ErrorMessage from "../components/ErrorMess";
import RouteView from "./RouteView"
import Nav from "./NavBar"
import "../App.css"

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Nav/>
        <RouteView/>
      </React.Fragment>
    </Router>
  </Provider>
);
export default App;
