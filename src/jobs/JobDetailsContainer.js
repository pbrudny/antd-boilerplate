import React, { Component, Fragment } from 'react';
import store from '../stores/store';
import { observer } from "mobx-react";
import Job from "./Job";

import { CircularProgress } from "@material-ui/core";

class JobDetailsContainer extends Component {
  componentDidMount() {
    store.getJob(this.props.match.params.number);
  }

  render() {
    if (!store.currentJob || !store.currentJob.fields) {
      return (
        <CircularProgress />
      )
    }

    return <Fragment>
      <Job job={store.currentJob}/>
    </Fragment>
  }
}

JobDetailsContainer = observer(JobDetailsContainer);
export default JobDetailsContainer;
