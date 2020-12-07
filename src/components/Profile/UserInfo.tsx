import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux-store";
import { fetchUserSellingInfo } from "../../redux-store/userProfile/actions";
import { USER_ROLES } from "../../shared/configuration";

const { SELLER, CUSTOMER } = USER_ROLES;

const useStyles = makeStyles((theme) => ({
  userInfo: {
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {},
  },
  sellerInfo: {
    fontWeight: "bold",
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
};

function UserInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { currentUser, soldCars } = userProfile;

  useEffect(() => {
    if (currentUser.role === SELLER) {
      dispatch(fetchUserSellingInfo(currentUser.userId));
    }
  }, [dispatch, currentUser.userId, currentUser.role]);

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justify="center"
      spacing={2}
    >
      <Grid item md={3} className={classes.userInfo}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography noWrap={true} variant="h3" color="primary">
              <Box borderRadius={20} {...defaultProps}>
                {soldCars.length}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.sellerInfo}>
              {`Number of ${
                currentUser.role === SELLER
                  ? "signed contracts"
                  : currentUser.role === CUSTOMER
                  ? "bought cars"
                  : ""
              }`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserInfo;
