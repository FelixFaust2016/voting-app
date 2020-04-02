import React from "react";
import { Redirect } from "react-router-dom";

import ErrorMess from "../components/ErrorMess";
import CreatePoll from "../components/CreatePoll"

const CreatePollPage = ({isAuthenticated}) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <ErrorMess />
      <CreatePoll />
    </div>
  );
};

export default CreatePollPage;
