import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux-store";
import { fetchUserSellingInfo } from "../../redux-store/userProfile/actions";

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

function SellerInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { currentUser, customerInfo } = userProfile;

  useEffect(() => {
    dispatch(fetchUserSellingInfo(currentUser.userId));
  }, [dispatch, currentUser.userId]);

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
                {customerInfo.numberOfBoughtCars}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.sellerInfo}>
              Number of bought cars
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SellerInfo;
