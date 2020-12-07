import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { insertCarValidationSchema } from "../../../../../shared/validation-schemas";
import {
  setInsertModalVisibility,
  fetchBrands,
  fetchSuppliers,
  fetchModels,
} from "../../../../../redux-store/modals/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../redux-store";
import { Vehicle } from "../../../../../data/models/Vehicle";
import { addCar } from "../../../../../redux-store/tables/actions";

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

function InsertCarForm() {
  const classes = useStyles();

  const brands = useSelector((state: AppState) => state.modals.data.brands);
  const suppliers = useSelector(
    (state: AppState) => state.modals.data.suppliers
  );
  const models = useSelector((state: AppState) => state.modals.data.models);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      modelId: "",
      supplierId: "",
      chassisNumber: "",
      yearOfProduction: "",
    },
    validationSchema: insertCarValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      const insertedSupplierName = suppliers.filter(
        (supplier) => supplier.supplierId === values.supplierId
      )[0].name;
      const insertedModelName = models.filter(
        (model) => model.brandId === values.modelId
      )[0].name;
      const insertedBrandName = brands.filter(
        (brand) => brand.brandId === values.brandId
      )[0].name;

      dispatch(
        addCar({
          brandName: insertedBrandName,
          modelName: insertedModelName,
          supplierName: insertedSupplierName,
          ...(values as Vehicle),
        })
      );

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
            <InputLabel id="brand-select-label">Brand</InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              name="brandId"
              onChange={handleChange}
              value={values.modelId}
              error={touched.modelId && errors.modelId ? true : false}
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
            <InputLabel id="supplier-select-label">Supplier</InputLabel>
            <Select
              labelId="supplier-select-label"
              id="supplier-select"
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
            id="chassisNumber"
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
            id="yearOfProduction"
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

export default InsertCarForm;
