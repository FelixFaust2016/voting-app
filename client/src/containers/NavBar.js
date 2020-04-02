import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";

import { logout } from "../store/actions";

const NavBar = ({ auth, logout }) => (
  <div className="nav">
    <h2>VOTE</h2>
    <div style={{flex:'1'}}></div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {auth.isAuthenticated === false  && <li>
        <Link to="/register">Register</Link>
      </li>}
      { auth.isAuthenticated === false  && <li>
        <Link to="/login">Login</Link>
      </li>}
      {auth.isAuthenticated === true  && <li>
        <Link to="/poll/new">Create Poll</Link>
      </li>}
      {auth.isAuthenticated === false ? (
        ""
      ) : (
        <li>
          <a style={{cursor:'pointer'}} onClick={logout}>Logout</a>
        </li>
      )}
    </ul>
    {auth.isAuthenticated && <p>Logged in as {auth.user.username}</p>}
  </div>
);

export default connect(store => ({ auth: store.auth }), { logout })(NavBar);
