import React, { Component } from "react";
import { connect } from "react-redux";

import { getPolls, getUserPolls, getCurrentPoll } from "../store/actions";

class Polls extends Component {
  constructor(props) {
    super(props);

    this.selectPolls = this.selectPolls.bind(this);
  }

  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  selectPolls(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
  }

  render() {
    const { auth, getUserPolls, getPolls } = this.props;

    const polls = this.props.polls.map(poll => (
      <li onClick={() => this.selectPolls(poll._id)} key={poll._id}>
        {poll.question} ?
      </li>
    ));

    return (
      <main className="polls">
        <div>
          {auth.isAuthenticated && (
            <div className="btn-cont">
              <button className="btn" onClick={getPolls}>
                All polls
              </button>
              <button className="btn" onClick={getUserPolls}>
                My polls
              </button>
            </div>
          )}
          <ul>{polls}</ul>
        </div>
      </main>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls
  }),
  { getPolls, getUserPolls, getCurrentPoll }
)(Polls);
