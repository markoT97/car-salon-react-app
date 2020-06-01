import React from "react";
import { Container, Grid, Divider } from "@material-ui/core";
import UserOverview from "./UserOverview";
import UserDescription from "./UserDescription";
import SoldCars from "./SoldCars";
import SellerInfo from "./SellerInfo";

/*
const useStyles = makeStyles((theme) => ({
  paper: {
    width: "25em",
    padding: "2em",
  },
  imageContainer: {
    margin: theme.spacing(1),
  },
}));
*/

function Index() {
  //const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        spacing={1}
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <UserOverview />
        </Grid>
        <Grid item xs={12}>
          <SellerInfo />
        </Grid>
        <Grid item>
          <UserDescription />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <SoldCars />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
