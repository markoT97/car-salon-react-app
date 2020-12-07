import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel, Switch, FormGroup } from "@material-ui/core";
import { useFormik } from "formik";
import { insertEquipmentValidationSchema } from "../../../../../shared/validation-schemas";
import { Equipment } from "../../../../../data/models/Equipment";
import { setInsertModalVisibility } from "../../../../../redux-store/modals/actions";
import { useDispatch } from "react-redux";
import { addEquipment } from "../../../../../redux-store/tables/actions";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", // Fix IE 11 issue.
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {},
  },
}));

function InsertEquipmentForm() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      color: "",
      hasABS: false,
      hasAirConditioning: false,
    },
    validationSchema: insertEquipmentValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      dispatch(addEquipment(values as Equipment));

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
            autoComplete="color"
            name="color"
            variant="outlined"
            required
            fullWidth
            id="color"
            label="Color"
            autoFocus
            onChange={handleChange}
            value={values.color}
            error={touched.color && errors.color ? true : false}
            helperText={touched.color && errors.color}
          />
        </Grid>

        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={values.hasABS}
                  onChange={handleChange}
                  name="hasABS"
                />
              }
              label="Has ABS"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={values.hasAirConditioning}
                  onChange={handleChange}
                  name="hasAirConditioning"
                />
              }
              label="Has Air Conditioning"
            />
          </FormGroup>
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
