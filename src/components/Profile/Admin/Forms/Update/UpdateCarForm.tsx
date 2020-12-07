import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { insertCarValidationSchema } from "../../../../../shared/validation-schemas";
import {
  setUpdateModalVisibility,
  fetchBrands,
  fetchSuppliers,
  fetchModels,
} from "../../../../../redux-store/modals/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../redux-store";
import { Vehicle } from "../../../../../data/models/Vehicle";
import { updateCar } from "../../../../../redux-store/tables/actions";

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

function UpdateCarForm(props: { currentData: any }) {
  const classes = useStyles();

  const brands = useSelector((state: AppState) => state.modals.data.brands);
  const suppliers = useSelector(
    (state: AppState) => state.modals.data.suppliers
  );
  const models = useSelector((state: AppState) => state.modals.data.models);

  const { currentData } = props;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      brandId: (currentData && (currentData as Vehicle).brandId) || "",
      supplierId: (currentData && (currentData as Vehicle).supplierId) || "",
      chassisNumber:
        (currentData && (currentData as Vehicle).chassisNumber) || "",
      yearOfProduction:
        (currentData && (currentData as Vehicle).yearOfProduction) || "",
    },
    enableReinitialize: true,
    validationSchema: insertCarValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      const updatedBrandName = brands.filter(
        (brand) => brand.brandId === values.brandId
      )[0].name;
      const updatedSupplierName = suppliers.filter(
        (supplier) => supplier.supplierId === values.supplierId
      )[0].name;
      const updatedModelName = models.filter(
        (model) => model.brandId === values.brandId
      )[0].name;

      dispatch(
        updateCar({
          brandName: updatedBrandName,
          modelName: updatedModelName,
          supplierName: updatedSupplierName,
          carId: (currentData as Vehicle)?.carId,
          ...(values as Vehicle),
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
    dispatch(fetchSuppliers());
    dispatch(fetchModels());
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
            <InputLabel id="upd-supplier-select-label">Supplier</InputLabel>
            <Select
              labelId="supplier-select-label"
              id="upd-supplier-select"
              name="supplierId"
              onChange={handleChange}
              value={values.supplierId}
              error={touched.supplierId && errors.supplierId ? true : false}
            >
              {suppliers.map((s) => {
                return (
                  <MenuItem key={s.supplierId} value={s.supplierId}>
                    {s.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="chassisNumber"
            name="chassisNumber"
            variant="outlined"
            required
            fullWidth
            id="upd-chassisNumber"
            label="Chassis number"
            autoFocus
            onChange={handleChange}
            value={values.chassisNumber}
            error={touched.chassisNumber && errors.chassisNumber ? true : false}
            helperText={touched.chassisNumber && errors.chassisNumber}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="yearOfProduction"
            name="yearOfProduction"
            type="number"
            variant="outlined"
            required
            fullWidth
            id="upd-yearOfProduction"
            label="Year of production"
            autoFocus
            onChange={handleChange}
            value={values.yearOfProduction}
            error={
              touched.yearOfProduction && errors.yearOfProduction ? true : false
            }
            helperText={touched.yearOfProduction && errors.yearOfProduction}
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

export default UpdateCarForm;
