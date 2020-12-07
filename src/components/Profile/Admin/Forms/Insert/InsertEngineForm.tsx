import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { insertEngineValidationSchema } from "../../../../../shared/validation-schemas";
import { Engine } from "../../../../../data/models/Engine";
import { setInsertModalVisibility } from "../../../../../redux-store/modals/actions";
import { useDispatch } from "react-redux";
import { addEngine } from "../../../../../redux-store/tables/actions";

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

function InsertEquipmentForm() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      powerKW: "",
    },
    validationSchema: insertEngineValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(addEngine(values as Engine));

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

        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              name="type"
              onChange={handleChange}
              value={values.type}
              error={touched.type && errors.type ? true : false}
            >
              {engineTypes.map((et) => {
                return (
                  <MenuItem key={et} value={et}>
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
            id="powerKW"
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

export default InsertEquipmentForm;
