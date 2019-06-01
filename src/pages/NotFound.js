import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid/Grid";
import { SentimentDissatisfied } from "@material-ui/icons";

const NotFound = () => {
  return (
    <Grid container justify = "center">
      <Grid item sm={3}>
        <Paper style={{padding: 20, margin: 30}}>
          <h1>Not found <SentimentDissatisfied /></h1>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default NotFound;
