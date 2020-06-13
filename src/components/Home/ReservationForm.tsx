import React, { useEffect } from "react";
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
  Switch,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVehicles,
  purchaseVehicle,
} from "../../redux-store/vehicleList/actions";
import { AppState } from "../../redux-store";
import { Vehicle } from "../../data/models/Vehicle";
import { useFormik } from "formik";
import {
  purchaseNewNaturalPersonValidationSchema,
  purchaseOldNaturalPersonValidationSchema,
  purchaseNewLegalEntityValidationSchema,
  purchaseOldLegalEntityValidationSchema,
} from "../../shared/validation-schemas";

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
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      height: "47em",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    height: "73vh",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      height: "97vh",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
  try: {
    flexGrow: 1,
  },
}));

const ReservationForm = () => {
  const classes = useStyles();
  const vehicleList = useSelector((state: AppState) => state.vehicleList);
  const { vehicles, selectedVehicle } = vehicleList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const [customerType, setCustomerType] = React.useState<string | null>(
    "naturalPerson"
  );

  const [isOldUser, setIsOldUser] = React.useState<boolean>(false);

  const handleCustomerTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newCustomerType: string | null
  ) => {
    if (newCustomerType) {
      setCustomerType(newCustomerType);
    }
  };
  const validationSchema =
    customerType === "naturalPerson" && !isOldUser
      ? purchaseNewNaturalPersonValidationSchema
      : customerType === "naturalPerson" && isOldUser
      ? purchaseOldNaturalPersonValidationSchema
      : customerType === "legalEntity" && !isOldUser
      ? purchaseNewLegalEntityValidationSchema
      : customerType === "legalEntity" && isOldUser
      ? purchaseOldLegalEntityValidationSchema
      : null;

  const formik = useFormik({
    initialValues: {
      carType: "",
      address: "",

      jmbg: "",
      firstName: "",
      lastName: "",
      gender: "",

      pib: "",
      name: "",
    },
    validationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(
        purchaseVehicle(selectedVehicle, customerType, values, isOldUser)
      );
    },
  });

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
          onChange={formik.handleChange}
          value={formik.values.jmbg}
          error={formik.touched.jmbg && formik.errors.jmbg ? true : false}
          helperText={formik.touched.jmbg && formik.errors.jmbg}
        />
      </Grid>
      {!isOldUser && (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? true
                  : false
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
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
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={
                formik.touched.lastName && formik.errors.lastName ? true : false
              }
              helperText={formik.touched.lastName && formik.errors.lastName}
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
                      onChange={formik.handleChange}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        </>
      )}
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
          onChange={formik.handleChange}
          value={formik.values.pib}
          error={formik.touched.pib && formik.errors.pib ? true : false}
          helperText={formik.touched.pib && formik.errors.pib}
        />
      </Grid>
      {!isOldUser && (
        <Grid item xs={12}>
          <TextField
            autoComplete="name"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
      )}
    </>
  );

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justify="flex-end"
            direction="row"
          >
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
              <FormControlLabel
                control={
                  <Switch
                    checked={isOldUser}
                    onChange={() => setIsOldUser(!isOldUser)}
                    name="isOldUser"
                    color="primary"
                  />
                }
                label="Old customer"
              />
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
                defaultValue={selectedVehicle.carId}
                onChange={formik.handleChange}
                error={
                  formik.touched.carType && formik.errors.carType ? true : false
                }
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <DriveEta />
                  </InputAdornment>
                }
              >
                <option aria-label="None" value="" />
                {vehicles.map((vehicle: Vehicle, i: number) => {
                  return (
                    <option key={i} value={vehicle.carId}>
                      {vehicle.brandName +
                        " " +
                        vehicle.modelName +
                        " " +
                        vehicle.yearOfProduction}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            {customerType === "naturalPerson"
              ? naturalPersonForm
              : customerType === "legalEntity"
              ? legalEntityForm
              : null}

            {!isOldUser && (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  error={
                    formik.touched.address && formik.errors.address
                      ? true
                      : false
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
            )}
          </Grid>
          <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Purchase
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ReservationForm;
