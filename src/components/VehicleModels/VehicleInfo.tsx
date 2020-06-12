import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../redux-store";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.light,
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

/*
const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);
*/

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

/*
function createData(
  model: string,
  doors: number,
  seats: number,
  transmission: string,
  airConditioning: string
) {
  return { model, doors, seats, transmission, airConditioning };
}
*/

function VehicleInfo() {
  const classes = useStyles();
  const selectedVehicle = useSelector(
    (state: AppState) => state.vehicleList.selectedVehicle
  );

  const history = useHistory();

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" colSpan={2}>
                {selectedVehicle.currency + " " + selectedVehicle.price}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Engine
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.engineName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Fuel
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.engineType}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Year of production
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.yearOfProduction}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Steering wheel
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.sideOfSteeringWheel}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Doors
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.numberOfDoors}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Seats
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.numberOfSeats}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Transmission
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.gearboxType}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Air conditioning
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.hasAirConditioning ? "Yes" : "No"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                ABS
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedVehicle.hasABS ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => history.push("/")}
        fullWidth
        variant="contained"
        color="primary"
      >
        Purchase
      </Button>
    </>
  );
}

export default VehicleInfo;
