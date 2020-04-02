import React from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

import { vote } from "../store/actions";

//generating random colors
const color = () => {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
};

const Poll = ({ poll, vote }) => {
  const answers =
    poll.options &&
    poll.options.map(option => (
      <button
        style={{ display: "block", margin: "10px auto" }}
        className="btn"
        onClick={() => vote(poll._id, { answer: option.option })}
        key={option._id}
      >
        {option.option}
      </button>
    ));

  const data = poll.options && {
    labels: poll.options.map(option => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map(option => color()),
        borderColor: "#323645",
        data: poll.options.map(option => option.votes)
      }
    ]
  };

  return (
    <div className="poll-single">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <main>
          <h3>{poll.question} ?</h3>
          <div
            style={{ width: "300px", margin: "20px auto", display: "block" }}
            className="btn-cont"
          >
            {answers}
          </div>
        </main>
      </div>
      <div className="poll-chart-cont">
        {poll.options && <Pie width={200} data={data} />}
      </div>
    </div>
  );
};

export default connect(
  store => ({
    poll: store.currentPoll
  }),
  { vote }
)(Poll);
