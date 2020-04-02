import React, { Component } from "react";
import { connect } from "react-redux";

import { authUser, logout } from "../store/actions";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();

    this.props.authUser(authType || "lohtmlFor", { username, password });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form className="poll-form" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={username}
              autoComplete="off"
              name="username"
              onChange={this.handleChange}
              placeholder="username"
            /><br/>
            <input
              type="password"
              value={password}
              autoComplete="off"
              name="password"
              onChange={this.handleChange}
              placeholder="password"
            /><br/>

            <button style={{margin:'20px auto'}} className="btn" type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(Auth);
