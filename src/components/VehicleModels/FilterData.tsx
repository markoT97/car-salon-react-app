import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Select,
  Paper,
  FormControl,
  InputLabel,
  Grid,
  Container,
  Button,
  FormGroup,
} from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux-store/index";
import {
  selectVehicleBrand,
  selectVehicleModel,
  fetchBrands,
  fetchModels,
  selectVehicleEngine,
  fetchEngines,
  fetchSuppliers,
  selectVehicleSupplier,
} from "../../redux-store/vehicleListFilters/actions";
import { Brand } from "../../data/models/Brand";
import { Model } from "../../data/models/Model";
import { fetchVehicles } from "../../redux-store/vehicleList/actions";
import { Engine } from "../../data/models/Engine";
import { Supplier } from "../../data/models/Supplier";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {},
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    formGroup: {
      [theme.breakpoints.up("sm")]: {
        justifyContent: "center",
      },
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    submitButton: {
      [theme.breakpoints.up("sm")]: {
        margin: "0 2em",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
  })
);

function FilterData() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleBrandListItemClick = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const foundedBrand = brands.find(
      (brand) => brand.brandId === parseInt(event.target.value as string)
    );

    dispatch(
      selectVehicleBrand(
        foundedBrand ? (foundedBrand as Brand) : { brandId: 0, name: "" }
      )
    );
  };

  const handleModelListItemClick = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const foundedModel = models.find(
      (model) => model.modelId === parseInt(event.target.value as string)
    );

    dispatch(
      selectVehicleModel(
        foundedModel
          ? (foundedModel as Model)
          : {
              modelId: 0,
              brandId: 0,
              engineId: 0,
              equipmentId: 0,
              name: "",
              numberOfDoors: 0,
              numberOfSeats: 0,
              gearboxType: "",
              sideOfSteeringWheel: "",
              price: 0,
            }
      )
    );
  };

  const handleEngineListItemClick = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const foundedEngine = engines.find(
      (engine) => engine.engineId === parseInt(event.target.value as string)
    );

    dispatch(
      selectVehicleEngine(
        foundedEngine
          ? (foundedEngine as Engine)
          : { engineId: 0, name: "", type: "", powerKW: 0 }
      )
    );
  };

  const handleSupplierListItemClick = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const foundedSupplier = suppliers.find(
      (supplier) =>
        supplier.supplierId === parseInt(event.target.value as string)
    );

    dispatch(
      selectVehicleSupplier(
        foundedSupplier
          ? (foundedSupplier as Supplier)
          : { supplierId: 0, name: "" }
      )
    );
  };

  const vehicleListFilters = useSelector(
    (state: AppState) => state.vehicleListFilters
  );
  const {
    brands,
    selectedBrand,
    models,
    selectedModel,
    engines,
    selectedEngine,
    suppliers,
    selectedSupplier,
  } = vehicleListFilters;

  useEffect(() => {
    dispatch(
      fetchBrands(
        selectedModel.modelId,
        selectedEngine.engineId,
        selectedSupplier.supplierId
      )
    );
    if (selectedBrand) {
      dispatch(fetchModels(selectedBrand.brandId));
      dispatch(fetchEngines(selectedBrand.brandId));
      dispatch(fetchSuppliers(selectedBrand.brandId));
    }
  }, [
    dispatch,
    selectedModel,
    selectedEngine,
    selectedSupplier,
    selectedBrand,
  ]);

  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <Grid container className={classes.container}>
            <Grid item>
              <FormGroup row className={classes.formGroup}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">Brand</InputLabel>
                  <Select
                    native
                    id="select"
                    value={selectedBrand.brandId}
                    onChange={handleBrandListItemClick}
                  >
                    <option aria-label="None" value="" />
                    {brands.map((brand: Brand, i: number) => {
                      return (
                        <option key={i} value={brand.brandId}>
                          {brand.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">Model</InputLabel>
                  <Select
                    native
                    id="select"
                    value={selectedModel.modelId}
                    onChange={handleModelListItemClick}
                    // disabled={selectedBrand.brandId === 0}
                  >
                    <option aria-label="None" value="" />
                    {models.map((model: Model, i: number) => {
                      return (
                        <option key={i} value={model.modelId}>
                          {model.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">
                    Engine
                  </InputLabel>
                  <Select
                    native
                    id="select"
                    value={selectedEngine.engineId}
                    onChange={handleEngineListItemClick}
                  >
                    <option aria-label="None" value="" />
                    {engines.map((engine: Engine, i: number) => {
                      return (
                        <option key={i} value={engine.engineId}>
                          {engine.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">
                    Supplier
                  </InputLabel>
                  <Select
                    native
                    id="select"
                    value={selectedSupplier.supplierId}
                    onChange={handleSupplierListItemClick}
                  >
                    <option aria-label="None" value="" />
                    {suppliers.map((supplier: Supplier, i: number) => {
                      return (
                        <option key={i} value={supplier.supplierId}>
                          {supplier.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </FormGroup>
            </Grid>

            <Grid item>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submitButton}
                onClick={() =>
                  dispatch(
                    fetchVehicles(
                      selectedBrand.brandId,
                      selectedModel.modelId,
                      selectedEngine.engineId,
                      selectedSupplier.supplierId
                    )
                  )
                }
              >
                <FilterList />
                &nbsp;Filter
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default FilterData;
