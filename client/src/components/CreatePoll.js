import React, { Component } from "react";
import { connect } from "react-redux";

import { createPoll } from "../store/actions";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: ["", ""],
      movelabel: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ""] });
  }
  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoll(this.state);
  }

  render() {
    const options = this.state.options.map((options, i) => (
      <React.Fragment key={i}>
        <input
          type="text"
          value={options}
          onChange={e => this.handleAnswer(e, i)}
          onClick={this.handleLabel}
          placeholder="option"
        />
        <br />
      </React.Fragment>
    ));

    return (
      <div>
        <form className="poll-form" onSubmit={this.handleSubmit}>
          <div>
            <h3 style={{ textAlign: "center" }}>ADD NEW POLL</h3>
            <input
              type="text"
              name="question"
              value={this.state.question}
              onChange={this.handleChange}
              onClick={this.handleLabel}
              placeholder="question"
            />
            <br />
            {options}

            <div style={{ display: "flex", marginTop: "30px" }}>
              <button className="btn" type="button" onClick={this.addAnswer}>
                {" "}
                Add options
              </button>
              <br />
              <button style={{marginLeft:'20px'}} className="btn" type="submit">
                Submit
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { createPoll })(CreatePoll);
