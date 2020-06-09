import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../redux-store";

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

  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { currentUser } = userProfile;

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Avatar className={classes.avatar} src={currentUser.imagePath} alt="" />
        <h1 className={classes.userTitle}>
          {currentUser.firstName + " " + currentUser.lastName}
        </h1>
        <h4 className={classes.userType}>{currentUser.role}</h4>
      </Grid>
    </Grid>
  );
}

export default UserOverview;
