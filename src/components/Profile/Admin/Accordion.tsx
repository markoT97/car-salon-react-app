import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/ExpansionPanel";
import AccordionDetails from "@material-ui/core/ExpansionPanelDetails";
import AccordionSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "./Table";
import {
  TABLE_NAMES,
  localizedBrandColumns,
  localizedModelColumns,
  localizedSupplierColumns,
  localizedEquipmentColumns,
  localizedEngineColumns,
  localizedCarColumns,
  localizedUserColumns,
  modelsDef,
  suppliersDef,
  equipmentsDef,
  enginesDef,
  brandsDef,
  carsDef,
  sellersDef,
} from "./../../../shared/configuration";
import {
  fetchAllSuppliers,
  fetchAllEquipments,
  fetchAllEngines,
  fetchAllBrands,
  fetchAllModels,
  fetchAllCars,
  fetchAllSellers,
  setSelectedTable,
} from "../../../redux-store/tables/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux-store";
import { fetchBrands } from "../../../redux-store/modals/actions";

const {
  SUPPLIERS,
  EQUIPMENTS,
  ENGINES,
  BRANDS,
  MODELS,
  CARS,
  SELLERS,
  IMAGES,
} = TABLE_NAMES;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    accordionDetails: {
      display: "inherit",
    },
  })
);

export default function ControlledAccordions() {
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const expanded = useSelector((state: AppState) => state.tables.selectedTable);

  const suppliers = useSelector((state: AppState) => state.tables.suppliers);
  const equipments = useSelector((state: AppState) => state.tables.equipments);
  const engines = useSelector((state: AppState) => state.tables.engines);
  const brands = useSelector((state: AppState) => state.tables.brands);
  const models = useSelector((state: AppState) => state.tables.models);
  const cars = useSelector((state: AppState) => state.tables.cars);
  const sellers = useSelector((state: AppState) => state.tables.sellers);

  const dispatch = useDispatch();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    dispatch(setSelectedTable(isExpanded ? panel : false));

    if (isExpanded) {
      switch (panel) {
        case SUPPLIERS:
          return dispatch(fetchAllSuppliers());
        case EQUIPMENTS:
          return dispatch(fetchAllEquipments());
        case ENGINES:
          return dispatch(fetchAllEngines());
        case BRANDS:
          return dispatch(fetchAllBrands());
        case MODELS:
          return dispatch(fetchAllModels());
        case CARS:
          return dispatch(fetchAllCars());
        case SELLERS:
          return dispatch(fetchAllSellers());
        default:
          return;
      }
    }
  };

  const Tables = [
    {
      name: SUPPLIERS,
      columns: localizedSupplierColumns,
      dbColumns: Object.keys(suppliersDef[0]),
      data: suppliers,
    },
    {
      name: EQUIPMENTS,
      columns: localizedEquipmentColumns,
      dbColumns: Object.keys(equipmentsDef[0]),
      data: equipments,
    },
    {
      name: ENGINES,
      columns: localizedEngineColumns,
      dbColumns: Object.keys(enginesDef[0]),
      data: engines,
    },
    {
      name: BRANDS,
      columns: localizedBrandColumns,
      dbColumns: Object.keys(brandsDef[0]),
      data: brands,
    },
    {
      name: MODELS,
      columns: localizedModelColumns,
      dbColumns: Object.keys(modelsDef[0]),
      data: models,
    },
    {
      name: CARS,
      columns: localizedCarColumns,
      dbColumns: Object.keys(carsDef[0]),
      data: cars,
    },
    {
      name: SELLERS,
      columns: localizedUserColumns,
      dbColumns: Object.keys(sellersDef[0]),
      data: sellers,
    },
  ];

  return (
    <div className={classes.root}>
      {Tables.map((table: any, i: any) => {
        return (
          <Accordion
            key={i}
            expanded={expanded === table.name}
            onChange={handleChange(table.name)}
            TransitionProps={{ unmountOnExit: true }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{table.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Table
                data={table}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
