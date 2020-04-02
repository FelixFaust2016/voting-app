import React from "react";
import { connect } from "react-redux";
import { store } from "../store";

const Error = ({ error }) => (
  <React.Fragment>{error && <div className='error'>{error.message}</div>}</React.Fragment>
);

export default connect(store => ({ error: store.error }))(Error);
