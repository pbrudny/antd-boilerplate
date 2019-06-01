import React, { Component } from 'react';
import store from '../stores/store';
import { observer } from "mobx-react";
import { CircularProgress } from "@material-ui/core";
import Jobs from "./Jobs";

class JobsContainer extends Component {
  componentDidMount() {
    store.currentJob = null
  }

  render() {
    if (!store.jobs) {
      return (
        <CircularProgress />
      )
    }

    return (
      <>
        <Jobs
          jobs={store.jobs}
        />
      </>
    )
  }
}

JobsContainer = observer(JobsContainer);
export default JobsContainer;
