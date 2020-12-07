import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { registerLegalEntityValidationSchema } from "../../../shared/validation-schemas";
import { post } from "../../../data/services/userService";
import { RegisterModel } from "../../../data/models/RegisterModel";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
}));

function LegalEntityForm() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      pib: "",
      name: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema: registerLegalEntityValidationSchema,
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
            autoComplete="pib"
            name="pib"
            variant="outlined"
            required
            fullWidth
            id="pib"
            label="PIB"
            autoFocus
            onChange={handleChange}
            value={values.pib}
            error={touched.pib && errors.pib ? true : false}
            helperText={touched.pib && errors.pib}
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
            label="Company name"
            onChange={handleChange}
            value={values.name}
            error={touched.name && errors.name ? true : false}
            helperText={touched.name && errors.name}
          />
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
          />
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

export default LegalEntityForm;
