import React from "react";
import { Link } from "react-router-dom";
import { Paper, Grid } from "@material-ui/core";

export default function Navbar() {
  return(
    <Grid container justify={"center"}>
      <Paper>
        <Link to={"/"}> Home </Link>|
        <Link to={"/layouts/album"}> Album </Link>|
        <Link to={"/layouts/blog"}> Blog </Link>|
        <Link to={"/layouts/checkout"}> Checkout </Link>|
        <Link to={"/layouts/dashboard"}> Dashboard </Link>|
        <Link to={"/layouts/pricing"}> Pricing </Link>|
        <Link to={"/layouts/sign-in"}> Sign in </Link>|
        <Link to={"/jobs"}> Live demo </Link>
      </Paper>
    </Grid>
  )
}
