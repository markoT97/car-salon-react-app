import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { insertEngineValidationSchema } from "../../../../../shared/validation-schemas";
import { Engine } from "../../../../../data/models/Engine";
import { setUpdateModalVisibility } from "../../../../../redux-store/modals/actions";
import { useDispatch } from "react-redux";
import { updateEngine } from "../../../../../redux-store/tables/actions";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const engineTypes = ["Petrol", "Diesel", "Hybrid"];

function UpdateEngineForm(props: { currentData: any }) {
  const classes = useStyles();

  const { currentData } = props;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: (currentData && (currentData as Engine).name) || "",
      type: (currentData && (currentData as Engine).type) || "",
      powerKW: (currentData && (currentData as Engine).powerKW) || "",
    },
    enableReinitialize: true,
    validationSchema: insertEngineValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(
        updateEngine({
          ...(values as Engine),
          engineId: (currentData as Engine)?.engineId,
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

        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="upd-type-select-label">Type</InputLabel>
            <Select
              labelId="upd-type-select-label"
              id="upd-type-select"
              name="type"
              onChange={handleChange}
              value={values.type}
              error={touched.type && errors.type ? true : false}
            >
              {engineTypes.map((et, i) => {
                return (
                  <MenuItem key={i} value={et}>
                    {et}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="powerKW"
            name="powerKW"
            type="number"
            variant="outlined"
            required
            fullWidth
            id="upd-powerKW"
            label="Power (KW)"
            autoFocus
            onChange={handleChange}
            value={values.powerKW}
            error={touched.powerKW && errors.powerKW ? true : false}
            helperText={touched.powerKW && errors.powerKW}
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

export default UpdateEngineForm;
