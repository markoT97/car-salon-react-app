import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
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

function SellerInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authentication = useSelector((state: AppState) => state.authentication);
  const { sellingInfo } = authentication;

  useEffect(() => {
    dispatch(fetchUserSellingInfo(1));
  }, [dispatch]);

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
              {sellingInfo.numberOfSoldCars}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.sellerInfo}>Sold cars</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Grid container>
          <Grid item md={12}>
            <Typography noWrap={true} variant="h3" color="primary">
              {sellingInfo.currency + " " + sellingInfo.totalEarnedMoney}
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={12} className={classes.sellerInfo}>
          <Typography className={classes.sellerInfo}>Earned money</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SellerInfo;
