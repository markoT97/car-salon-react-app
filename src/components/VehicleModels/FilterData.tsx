import React from "react";
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

const carBrands = ["BMW", "Audi", "Wolkswagen", "Fiat", "Toyota"];
const carModels = ["X6", "A6", "Golf 4", "Punto", "Yaris"];
const carEngines = ["Engine 1", "Engine 2", "Engine 3", "Engine 4", "Engine 5"];
const carEquipments = [
  "Equipment 1",
  "Equipment 2",
  "Equipment 3",
  "Equipment 4",
  "Equipment 5",
];
const carSuppliers = [
  "Supplier 1",
  "Supplier 2",
  "Supplier 3",
  "Supplier 4",
  "Supplier 5",
];

function FilterData() {
  const classes = useStyles();

  const [selectedBrand, setSelectedBrand] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [selectedEngine, setSelectedEngine] = React.useState("");
  const [selectedEquipment, setSelectedEquipment] = React.useState("");
  const [selectedSupplier, setSelectedSupplier] = React.useState("");

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
                    value={selectedBrand}
                    onChange={(event) => {
                      setSelectedBrand(event.target.value as string);
                    }}
                  >
                    <option aria-label="None" value="" />
                    {carBrands.map((brand: any, i: any) => {
                      return (
                        <option key={i} value={brand}>
                          {brand}
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
                    value={selectedModel}
                    onChange={(event) => {
                      setSelectedModel(event.target.value as string);
                    }}
                  >
                    <option aria-label="None" value="" />
                    {carModels.map((model: any, i: any) => {
                      return (
                        <option key={i} value={model}>
                          {model}
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
                    value={selectedEngine}
                    onChange={(event) => {
                      setSelectedEngine(event.target.value as string);
                    }}
                  >
                    <option aria-label="None" value="" />
                    {carEngines.map((engine: any, i: any) => {
                      return (
                        <option key={i} value={engine}>
                          {engine}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">
                    Equipment
                  </InputLabel>
                  <Select
                    native
                    id="select"
                    value={selectedEquipment}
                    onChange={(event) => {
                      setSelectedEquipment(event.target.value as string);
                    }}
                  >
                    <option aria-label="None" value="" />
                    {carEquipments.map((equipment: any, i: any) => {
                      return (
                        <option key={i} value={equipment}>
                          {equipment}
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
                    value={selectedSupplier}
                    onChange={(event) => {
                      setSelectedSupplier(event.target.value as string);
                    }}
                  >
                    <option aria-label="None" value="" />
                    {carSuppliers.map((supplier: any, i: any) => {
                      return (
                        <option key={i} value={supplier}>
                          {supplier}
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
              >
                <FilterList /> &nbsp;Filter
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default FilterData;
