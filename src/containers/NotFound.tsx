import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function NotFound() {
  let history = useHistory();

  return (
    <Container>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        spacing={0}
      >
        <Grid item xs={9}>
          <Typography variant="h3">Accidents happen.</Typography>
          <Typography variant="h5" color="primary">
            Just like this page.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => history.push("/")}
          >
            Return home
          </Button>
        </Grid>
        <Grid item xs={12}>
          <img
            style={{ maxWidth: "100%" }}
            src="https://previews.123rf.com/images/vladru/vladru1611/vladru161100041/69756010-two-car-crash-on-white-background-3d-illustration.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
