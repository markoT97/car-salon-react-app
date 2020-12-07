import React from "react";
import { Grid, Divider } from "@material-ui/core";
import UserOverview from "./../UserOverview";
import UserDescription from "./../UserDescription";
import SoldCars from "./../SoldCars";
import UserInfo from "./../UserInfo";
import CarsWithoutContract from "./CarsWithoutContracts";
import { Receipt } from "@material-ui/icons";

function SellerProfile() {
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
      <Grid item xs={12}>
        <h1>
          <Receipt /> &nbsp;Cars waiting for contract
        </h1>

        <CarsWithoutContract />
      </Grid>
      <Grid item>
        <SoldCars />
      </Grid>
    </>
  );
}

export default SellerProfile;
