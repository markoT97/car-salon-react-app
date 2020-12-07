import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useFormik } from "formik";
import { registerNaturalPersonValidationSchema } from "../../../shared/validation-schemas";
import { post } from "../../../data/services/userService";
import { RegisterModel } from "../../../data/models/RegisterModel";

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
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    //height: "69vh",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
}));

function NaturalPersonForm() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      jmbg: "",
      firstName: "",
      lastName: "",
      gender: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema: registerNaturalPersonValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      post({
        ...(values as RegisterModel),
        role: "Customer",
      });
    },
  });

  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    dirty,
    isValid,
  } = formik;
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justify="flex-end"
        direction="row"
      >
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
            onChange={handleChange}
            value={values.jmbg}
            error={touched.jmbg && errors.jmbg ? true : false}
            helperText={touched.jmbg && errors.jmbg}
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
            onChange={handleChange}
            value={values.firstName}
            error={touched.firstName && errors.firstName ? true : false}
            helperText={touched.firstName && errors.firstName}
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
            onChange={handleChange}
            value={values.lastName}
            error={touched.lastName && errors.lastName ? true : false}
            helperText={touched.lastName && errors.lastName}
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
                    onChange={handleChange}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            onChange={handleChange}
            value={values.address}
            error={touched.address && errors.address ? true : false}
            helperText={touched.address && errors.address}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            name="email"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            onChange={handleChange}
            value={values.email}
            error={touched.email && errors.email ? true : false}
            helperText={touched.email && errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="password"
            name="password"
            variant="outlined"
            type="password"
            required
            fullWidth
            id="password"
            label="Password"
            onChange={handleChange}
            value={values.password}
            error={touched.password && errors.password ? true : false}
            helperText={touched.password && errors.password}
          />{" "}
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!(isValid && dirty)}
          >
            Join Now
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default NaturalPersonForm;
