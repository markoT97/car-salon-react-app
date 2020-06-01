import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  userTitle: {},
  userType: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
  },
  avatar: {
    width: theme.spacing(22),
    height: theme.spacing(22),
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

function UserOverview() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Avatar
          className={classes.avatar}
          src="https://images.pexels.com/photos/3778147/pexels-photo-3778147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=940"
          alt=""
        />
        <h1 className={classes.userTitle}>Marko Trickovic</h1>
        <h4 className={classes.userType}>Seller</h4>
      </Grid>
    </Grid>
  );
}

export default UserOverview;
