import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { insertSupplierValidationSchema } from "../../../../../shared/validation-schemas";
import { Supplier } from "../../../../../data/models/Supplier";
import { setUpdateModalVisibility } from "../../../../../redux-store/modals/actions";
import { useDispatch } from "react-redux";
import { updateSupplier } from "../../../../../redux-store/tables/actions";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
}));

function UpdateSupplierForm(props: { currentData: any }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { currentData } = props;

  const formik = useFormik({
    initialValues: {
      name: (currentData && (currentData as Supplier).name) || "",
    },
    enableReinitialize: true,
    validationSchema: insertSupplierValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(
        updateSupplier({
          ...(values as Supplier),
          supplierId: (currentData as Supplier)?.supplierId,
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
            autoComplete="name"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="upd-name"
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

export default UpdateSupplierForm;
