import React from "react";
import { Grid, TextField, makeStyles, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { updateValidationSchema } from "../../shared/validation-schemas";
import { RegisterModel } from "../../data/models/RegisterModel";
import { useSelector } from "react-redux";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { AppState } from "../../redux-store";
import { put } from "../../data/services/userService";
import { useHistory } from "react-router";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const DataForm = () => {
  const classes = useStyles();
  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { currentUser } = userProfile;

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      role: "",
      firstName: currentUser.firstName ? currentUser.firstName : "",
      lastName: currentUser.lastName ? currentUser.lastName : "",
      gender: currentUser.gender ? currentUser.gender : "",
      email: currentUser.email,
      address: currentUser.address,
      imagePath:
        currentUser.imagePath === "" ? undefined : currentUser.imagePath,
      password: currentUser.password,
    },
    validationSchema: updateValidationSchema,
    onSubmit: (values: RegisterModel) => {
      console.log({ ...values, jmbg: currentUser.jmbg });
      put({
        ...values,
        userId: currentUser.userId,
        role: currentUser.role,
        jmbg: currentUser.jmbg,
      });
      history.push("my-profile");
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="role"
            name="role"
            label="Role"
            fullWidth
            autoComplete="role"
            defaultValue={currentUser.role}
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
            onChange={handleChange}
            defaultValue={currentUser.jmbg}
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
            onChange={handleChange}
            value={values.email}
            error={touched.email && errors.email ? true : false}
            helperText={touched.email && errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fname"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            onChange={handleChange}
            value={values.firstName}
            error={touched.firstName && errors.firstName ? true : false}
            helperText={touched.firstName && errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lname"
            name="lastName"
            label="Last name"
            fullWidth
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
            <RadioGroup
              aria-label="gender"
              name="gender"
              defaultValue={currentUser.gender}
              row
            >
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
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
            onChange={handleChange}
            value={values.address}
            error={touched.address && errors.address ? true : false}
            helperText={touched.address && errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ipath"
            name="imagePath"
            label="Image path"
            fullWidth
            autoComplete="ipath"
            onChange={handleChange}
            value={values.imagePath}
            error={touched.imagePath && errors.imagePath ? true : false}
            helperText={touched.imagePath && errors.imagePath}
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
            onChange={handleChange}
            value={values.password}
            error={touched.password && errors.password ? true : false}
            helperText={touched.password && errors.password}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!(isValid && dirty)}
        >
          Save changes
        </Button>
      </Grid>
    </form>
  );
};

export default DataForm;
