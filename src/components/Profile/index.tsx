import React, { useEffect } from "react";
import { Container, Grid, Divider } from "@material-ui/core";
import UserOverview from "./UserOverview";
import UserDescription from "./UserDescription";
import BoughtCars from "./BoughtCars";
import CustomerInfo from "./CustomerInfo";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux-store";
import { fetchCurrentUser } from "../../redux-store/userProfile/actions";

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
  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { token } = userProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(parseInt(token.jti)));
  }, [dispatch, token.jti]);

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
          <CustomerInfo />
        </Grid>
        <Grid item>
          <UserDescription />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <BoughtCars />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
