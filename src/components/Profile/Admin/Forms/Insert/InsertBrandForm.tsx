import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { insertBrandValidationSchema } from "../../../../../shared/validation-schemas";
import { Brand } from "../../../../../data/models/Brand";
import { setInsertModalVisibility } from "../../../../../redux-store/modals/actions";
import { useDispatch } from "react-redux";
import { addBrand } from "../../../../../redux-store/tables/actions";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
}));

function InsertBrandForm() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: insertBrandValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(addBrand(values as Brand));

      formik.resetForm();
      dispatch(setInsertModalVisibility(false));
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
            autoComplete="name"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            onChange={handleChange}
            value={values.name}
            error={touched.name && errors.name ? true : false}
            helperText={touched.name && errors.name}
          />
        </Grid>

        <Grid item>
          <Button
            onClick={() => dispatch(setInsertModalVisibility(false))}
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
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default InsertBrandForm;
