import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

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
              10
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
              $ 45K
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
