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
import { registerNaturalPersonValidationSchema } from "../../../../../shared/validation-schemas";
import { updateSeller } from "../../../../../redux-store/tables/actions";
import { RegisterModel } from "../../../../../data/models/RegisterModel";
import { useDispatch } from "react-redux";
import { setUpdateModalVisibility } from "../../../../../redux-store/modals/actions";
import { User } from "../../../../../data/models/User";

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

function UpdateSellerForm(props: { currentData: any }) {
  const classes = useStyles();

  const { currentData } = props;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      jmbg: (currentData && (currentData as User).jmbg) || "",
      firstName: (currentData && (currentData as User).firstName) || "",
      lastName: (currentData && (currentData as User).lastName) || "",
      gender: (currentData && (currentData as User).gender) || "",
      address: (currentData && (currentData as User).address) || "",
      email: (currentData && (currentData as User).email) || "",
      password: (currentData && (currentData as User).password) || "",
    },
    validationSchema: registerNaturalPersonValidationSchema,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(
        updateSeller({
          ...(values as User),
          role: "Seller",
          userId: (currentData as User)?.userId,
        })
      );

      formik.resetForm();
      dispatch(setUpdateModalVisibility(false));
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
            id="upd-jmbg"
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
            id="upd-firstName"
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
            id="upd-lastName"
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
            <RadioGroup
              aria-label="upd-gender"
              name="gender"
              value={values.gender}
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
            variant="outlined"
            required
            fullWidth
            id="upd-address"
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
            id="upd-email"
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
            id="upd-password"
            label="Password"
            onChange={handleChange}
            value={values.password}
            error={touched.password && errors.password ? true : false}
            helperText={touched.password && errors.password}
          />{" "}
        </Grid>

        <Grid item>
          <Button
            onClick={() => dispatch(setUpdateModalVisibility(false))}
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!(isValid && dirty)}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdateSellerForm;
