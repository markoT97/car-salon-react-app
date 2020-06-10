import React from "react";
import { Grid, TextField, makeStyles, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { updateValidationSchema } from "../../shared/validation-schemas";
import { RegisterModel } from "../../data/models/RegisterModel";
import { useSelector } from "react-redux";
import { AppState } from "../../redux-store";
import { put } from "../../data/services/userService";

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

  const formik = useFormik({
    initialValues: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
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
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
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
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email}
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
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={
              formik.touched.firstName && formik.errors.firstName ? true : false
            }
            helperText={formik.touched.firstName && formik.errors.firstName}
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
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={
              formik.touched.lastName && formik.errors.lastName ? true : false
            }
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={
              formik.touched.address && formik.errors.address ? true : false
            }
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ipath"
            name="imagePath"
            label="Image path"
            fullWidth
            autoComplete="ipath"
            onChange={formik.handleChange}
            value={formik.values.imagePath}
            error={
              formik.touched.imagePath && formik.errors.imagePath ? true : false
            }
            helperText={formik.touched.imagePath && formik.errors.imagePath}
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
            onChange={formik.handleChange}
            value={formik.values.password}
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!(formik.isValid && formik.dirty)}
        >
          Save changes
        </Button>
      </Grid>
    </form>
  );
};

export default DataForm;
