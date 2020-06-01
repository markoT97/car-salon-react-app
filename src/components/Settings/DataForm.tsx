import React from "react";
import { Grid, TextField } from "@material-ui/core";

function DataForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="role"
            name="role"
            label="Role"
            fullWidth
            autoComplete="role"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="jmbg"
            name="jmbg"
            label="JMBG"
            fullWidth
            autoComplete="jmbg"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fname"
            name="fname"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lname"
            name="lname"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DataForm;
