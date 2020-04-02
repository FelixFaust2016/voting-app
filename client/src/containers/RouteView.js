import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { getCurrentPoll } from "../store/actions";
import AuthPage from "../pages/AuthPage";
import Test from "../pages/TextPage";
import { store } from "../store";
import Home from "../pages/Home";
import PollPage from "../pages/PollPage";
import CreatePollPage from "../pages/CreatePollPage";

const RouteView = ({ auth, getCurrentPoll }) => (
  <main>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} /> */}
      <Route
        path="/login"
        exact
        render={() => (
          <AuthPage authType={"login"} isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        path="/register"
        exact
        render={() => (
          <AuthPage
            authType={"register"}
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
      <Route
        exact
        path="/poll/new"
        render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        exact
        path="/poll/:id"
        render={props => (
          <PollPage getPoll={id => getCurrentPoll(id)} {...props} />
        )}
      />
      <Route exact path="/test" render={() => <Test />} />
    </Switch>
  </main>
);

export default withRouter(
  connect(store => ({ auth: store.auth }), { getCurrentPoll })(RouteView)
);
