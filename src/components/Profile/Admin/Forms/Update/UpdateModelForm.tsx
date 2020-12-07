import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { insertModelValidationSchema } from "../../../../../shared/validation-schemas";
import { Model } from "../../../../../data/models/Model";
import {
  setUpdateModalVisibility,
  fetchEquipments,
  fetchBrands,
  fetchEngines,
} from "../../../../../redux-store/modals/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../redux-store";
import { updateModel } from "../../../../../redux-store/tables/actions";

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
    minWidth: 140,
  },
}));

const gearboxTypes = ["Manual", "Automatic"];
const sidesOfSteeringWheel = ["Left", "Right"];

function UpdateModelForm(props: { currentData: any }) {
  const classes = useStyles();

  const brands = useSelector((state: AppState) => state.modals.data.brands);
  const engines = useSelector((state: AppState) => state.modals.data.engines);
  const equipments = useSelector(
    (state: AppState) => state.modals.data.equipments
  );

  const { currentData } = props;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      brandId: (currentData && (currentData as Model).brandId) || "",
      engineId: (currentData && (currentData as Model).engineId) || "",
      equipmentId: (currentData && (currentData as Model).equipmentId) || "",
      name: (currentData && (currentData as Model).name) || "",
      numberOfDoors:
        (currentData && (currentData as Model).numberOfDoors) || "",
      numberOfSeats:
        (currentData && (currentData as Model).numberOfSeats) || "",
      gearboxType: (currentData && (currentData as Model).gearboxType) || "",
      sideOfSteeringWheel:
        (currentData && (currentData as Model).sideOfSteeringWheel) || "",
      price: (currentData && (currentData as Model).price) || "",
      currency: (currentData && (currentData as Model).currency) || "",
    },
    validationSchema: insertModelValidationSchema,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      console.log(values);

      const updatedBrandName = brands.filter(
        (brand) => brand.brandId === values.brandId
      )[0].name;
      const updatedEngineName = engines.filter(
        (engine) => engine.engineId === values.engineId
      )[0].name;

      dispatch(
        updateModel({
          brandName: updatedBrandName,
          engineName: updatedEngineName,
          modelId: (currentData as Model)?.modelId,
          ...(values as Model),
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

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchEngines());
    dispatch(fetchEquipments());
  }, [dispatch]);
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
          <FormControl className={classes.formControl}>
            <InputLabel id="upd-brand-select-label">Brand</InputLabel>
            <Select
              labelId="upd-brand-select-label"
              id="upd-brand-select"
              name="brandId"
              onChange={handleChange}
              value={values.brandId}
              error={touched.brandId && errors.brandId ? true : false}
            >
              {brands.map((b) => {
                return (
                  <MenuItem key={b.brandId} value={b.brandId}>
                    {b.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel id="upd-engine-select-label">Engine</InputLabel>
            <Select
              labelId="upd-engine-select-label"
              id="upd-engine-select"
              name="engineId"
              onChange={handleChange}
              value={values.engineId}
              error={touched.engineId && errors.engineId ? true : false}
            >
              {engines.map((e) => {
                return (
                  <MenuItem key={e.engineId} value={e.engineId}>
                    {e.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel id="upd-equipment-select-label">Equipment</InputLabel>
            <Select
              labelId="upd-equipment-select-label"
              id="upd-equipment-select"
              name="equipmentId"
              onChange={handleChange}
              value={values.equipmentId}
              error={touched.equipmentId && errors.equipmentId ? true : false}
            >
              {equipments.map((eq) => {
                return (
                  <MenuItem key={eq.equipmentId} value={eq.equipmentId}>
                    {eq.color +
                      " " +
                      (eq.hasABS ? "Has ABS " : "") +
                      (eq.hasAirConditioning ? "Has Air Conditioning" : "")}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

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
          <TextField
            autoComplete="numberOfDoors"
            name="numberOfDoors"
            type="number"
            variant="outlined"
            required
            fullWidth
            id="upd-numberOfDoors"
            label="Number of doors"
            autoFocus
            onChange={handleChange}
            value={values.numberOfDoors}
            error={touched.numberOfDoors && errors.numberOfDoors ? true : false}
            helperText={touched.numberOfDoors && errors.numberOfDoors}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="numberOfSeats"
            name="numberOfSeats"
            type="number"
            variant="outlined"
            required
            fullWidth
            id="upd-numberOfSeats"
            label="Number of seats"
            autoFocus
            onChange={handleChange}
            value={values.numberOfSeats}
            error={touched.numberOfSeats && errors.numberOfSeats ? true : false}
            helperText={touched.numberOfSeats && errors.numberOfSeats}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="gearbox-select-label">Gearbox type</InputLabel>
            <Select
              labelId="upd-gearbox-select-label"
              id="upd-gearbox-select"
              name="gearboxType"
              onChange={handleChange}
              value={values.gearboxType}
              error={touched.gearboxType && errors.gearboxType ? true : false}
            >
              {gearboxTypes.map((gt, i) => {
                return (
                  <MenuItem key={i} value={gt}>
                    {gt}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel id="side-steering-wheel-select-label">
              Steering wheel
            </InputLabel>
            <Select
              labelId="upd-side-steering-wheel-select-label"
              id="upd-side-steering-wheel-select"
              name="sideOfSteeringWheel"
              onChange={handleChange}
              value={values.sideOfSteeringWheel}
              error={
                touched.sideOfSteeringWheel && errors.sideOfSteeringWheel
                  ? true
                  : false
              }
            >
              {sidesOfSteeringWheel.map((ssw, i) => {
                return (
                  <MenuItem key={i} value={ssw}>
                    {ssw}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="price"
            name="price"
            type="number"
            variant="outlined"
            required
            fullWidth
            id="upd-price"
            label="Price"
            autoFocus
            onChange={handleChange}
            value={values.price}
            error={touched.price && errors.price ? true : false}
            helperText={touched.price && errors.price}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="currency"
            name="currency"
            variant="outlined"
            required
            fullWidth
            id="upd-currency"
            label="Currency"
            autoFocus
            onChange={handleChange}
            value={values.currency}
            error={touched.currency && errors.currency ? true : false}
            helperText={touched.currency && errors.currency}
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

export default UpdateModelForm;
