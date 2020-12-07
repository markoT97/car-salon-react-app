import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Person, BusinessCenterOutlined } from "@material-ui/icons";
import NaturalPersonForm from "./NaturalPersonForm";
import LegalEntityForm from "./LegalEntityForm";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  signinButton: {
    marginTop: theme.spacing(1),
  },
}));

const RegisterCustomerForm = () => {
  const classes = useStyles();

  const history = useHistory();

  const [customerType, setCustomerType] = useState<string | null>(
    "naturalPerson"
  );

  const handleCustomerTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newCustomerType: string | null
  ) => {
    if (newCustomerType) {
      setCustomerType(newCustomerType);
    }
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <ToggleButtonGroup
              value={customerType}
              exclusive
              onChange={handleCustomerTypeChange}
              aria-label="customer type"
            >
              <ToggleButton value="naturalPerson" aria-label="natural person">
                <Person /> &nbsp; Natural Person
              </ToggleButton>
              <ToggleButton value="legalEntity" aria-label="legal entity">
                <BusinessCenterOutlined /> &nbsp; Legal Entity
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          {customerType === "naturalPerson" ? (
            <NaturalPersonForm />
          ) : customerType === "legalEntity" ? (
            <LegalEntityForm />
          ) : null}

          <Grid item xs={12} className={classes.signinButton}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => history.push("login")}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default RegisterCustomerForm;
