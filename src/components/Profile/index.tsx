import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux-store";
import { fetchCurrentUser } from "../../redux-store/userProfile/actions";
import { USER_ROLES } from "../../shared/configuration";
import CustomerProfile from "./Customer";
import SellerProfile from "./Seller";
import AdminPanel from "./Admin";

const { CUSTOMER, SELLER, ADMIN } = USER_ROLES;

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
  const { token, currentUser } = userProfile;

  const { role } = currentUser;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(parseInt(token.jti)));
  }, [dispatch, token.jti]);

  const getUserProfile = () => {
    switch (role) {
      case SELLER:
        return <SellerProfile />;
      case CUSTOMER:
        return <CustomerProfile />;
      case ADMIN:
        return <AdminPanel />;
      default:
        return <></>;
    }
  };

  return (
    <Container>
      <Grid
        container
        spacing={1}
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        {getUserProfile()}
      </Grid>
    </Container>
  );
}

export default Index;
