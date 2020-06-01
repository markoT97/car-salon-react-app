import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  description: {
    textAlign: "justify",
  },
}));

function UserDescription() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item className={classes.description} xs={7}>
        An artist of considerable range, Chet Faker — the name taken by
        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
        records all of his own music, giving it a warm, intimate feel with a
        solid groove structure.
      </Grid>
    </Grid>
  );
}

export default UserDescription;
