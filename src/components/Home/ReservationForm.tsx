import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Person, BusinessCenterOutlined, DriveEta } from "@material-ui/icons";
import {
  FormControl,
  InputLabel,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
} from "@material-ui/core";

const genders = [
  {
    title: "Male",
    value: "M",
  },
  {
    title: "Female",
    value: "F",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
}));

const naturalPersonForm = (
  <>
    <Grid item xs={12}>
      <TextField
        autoComplete="jmbg"
        name="jmbg"
        variant="outlined"
        required
        fullWidth
        id="jmbg"
        label="JMBG"
        autoFocus
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        autoComplete="fname"
        name="firstName"
        variant="outlined"
        required
        fullWidth
        id="firstName"
        label="First Name"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        autoComplete="lname"
      />
    </Grid>
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" row>
          {genders.map((gender, i) => {
            return (
              <FormControlLabel
                key={i}
                value={gender.value}
                control={<Radio color="primary" />}
                label={gender.title}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid>
  </>
);

const legalEntityForm = (
  <>
    <Grid item xs={12}>
      <TextField
        autoComplete="pib"
        name="pib"
        variant="outlined"
        required
        fullWidth
        id="pib"
        label="PIB"
        autoFocus
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        autoComplete="name"
        name="name"
        variant="outlined"
        required
        fullWidth
        id="name"
        label="Name"
      />
    </Grid>
  </>
);

export default function ReservationForm() {
  const classes = useStyles();

  const [customerType, setAlignment] = React.useState<string | null>(
    "naturalPerson"
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newCustomerType: string | null
  ) => {
    if (newCustomerType) {
      setAlignment(newCustomerType);
    }
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <ToggleButtonGroup
                value={customerType}
                exclusive
                onChange={handleAlignment}
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

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Car type
              </InputLabel>
              <Select
                native
                label="Car type"
                required
                inputProps={{
                  name: "carType",
                  id: "outlined-car-type-native-simple",
                }}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <DriveEta />
                  </InputAdornment>
                }
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

            {customerType === "naturalPerson"
              ? naturalPersonForm
              : customerType === "legalEntity"
              ? legalEntityForm
              : null}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Purchase
          </Button>
        </form>
      </div>
    </Container>
  );
}
