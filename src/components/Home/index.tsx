import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slideshow from "./Slideshow";
import { Grid } from "@material-ui/core";
import RegisterCustomerForm from "./RegisterCustomerForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      flexGrow: 1,
      background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.primary.main} 100%)`,
      height: "91vh",
      overflow: "hidden",
      padding: "2em",
      [theme.breakpoints.down("sm")]: {
        height: "79em",
      },
    },
  })
);

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row-reverse"
        className={classes.paper}
        justify="center"
      >
        <Grid item md={6}>
          <Slideshow />
        </Grid>
        <Grid item md={6}>
          <RegisterCustomerForm />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
