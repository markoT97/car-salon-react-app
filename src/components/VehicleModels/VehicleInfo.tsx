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

function VehicleInfo({ selectedCar }: any) {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" colSpan={2}>
                $ 100.40
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Model
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedCar.model}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Doors
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedCar.doors}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Seats
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedCar.seats}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Transmission
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedCar.transmission}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Air conditioning
              </TableCell>
              <TableCell component="th" scope="row">
                {selectedCar.airConditioning}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button fullWidth variant="contained" color="primary">
        Purchase
      </Button>
    </>
  );
}

export default VehicleInfo;
