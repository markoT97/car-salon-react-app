import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Grid } from "@material-ui/core";

function Loading() {
  return (
    <Container>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <CircularProgress disableShrink />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loading;
