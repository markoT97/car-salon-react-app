import React from "react";
import { Grid, Divider } from "@material-ui/core";
import UserOverview from "./../UserOverview";
import UserDescription from "./../UserDescription";
import SoldCars from "./../SoldCars";
import UserInfo from "./../UserInfo";

function CustomerProfile() {
  return (
    <>
      <Grid item xs={12}>
        <UserOverview />
      </Grid>
      <Grid item xs={12}>
        <UserInfo />
      </Grid>
      <Grid item>
        <UserDescription />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item>
        <SoldCars />
      </Grid>
    </>
  );
}

export default CustomerProfile;
