import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import VehiclesList from "./VehiclesList";
import VehicleInfo from "./VehicleInfo";
import FilterData from "./FilterData";
import { useSelector } from "react-redux";
import { AppState } from "../../redux-store/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: "100%",
      height: "auto",
    },
  })
);

function Index() {
  const classes = useStyles();

  const vehicleList = useSelector((state: AppState) => state.vehicleList);
  const { image } = vehicleList.selectedModel;

  return (
    <>
      <Container>
        <h1>Vehicle Models</h1>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <FilterData />
          </Grid>
          <Grid item xs={12} sm={3}>
            <VehiclesList />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={image.path + image.name + "." + image.extension}
              alt={image.name}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <VehicleInfo />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Index;
