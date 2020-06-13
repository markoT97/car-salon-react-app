import React, { useEffect } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux-store";
import {
  fetchCarsWithoutContracts,
  selectCarsForSign,
} from "../../redux-store/userProfile/actions";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { carsWithoutContracts, currentUser } = userProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsWithoutContracts());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Year of production</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carsWithoutContracts.map((car, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {car.brandName}
              </StyledTableCell>
              <StyledTableCell align="right">{car.modelName}</StyledTableCell>
              <StyledTableCell align="right">
                {car.yearOfProduction}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button key={i}>
                  <Create
                    onClick={() =>
                      dispatch(
                        selectCarsForSign({
                          carId: car.carId,
                          userId: currentUser.userId,
                        })
                      )
                    }
                  />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
