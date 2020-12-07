import React, { useRef, useEffect } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  Delete,
  Create,
  Add,
} from "@material-ui/icons";
import { Button, Avatar } from "@material-ui/core";
import { TABLE_NAMES } from "./../../../shared/configuration";
import { useDispatch } from "react-redux";
import {
  removeSupplier,
  removeEquipment,
  removeEngine,
  removeBrand,
  removeModel,
  removeCar,
  removeSeller,
  setUpdateTable,
} from "../../../redux-store/tables/actions";
import {
  setInsertModalVisibility,
  setUpdateModalVisibility,
} from "../../../redux-store/modals/actions";

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

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      fontWeight: "bold",
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

export default function CustomizedTable(props: {
  data: any;
  rowsPerPage: number;
  handleChangeRowsPerPage: any;
  page: number;
  handleChangePage: any;
}) {
  const classes = useStyles();

  const {
    data,
    rowsPerPage,
    handleChangeRowsPerPage,
    page,
    handleChangePage,
  } = props;

  const dispatch = useDispatch();

  const tableRef = React.useRef<HTMLTableSectionElement>(null);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.data.length - page * rowsPerPage);

  const getColumn = (col: any) => {
    if (typeof col === "string" || typeof col === "number") {
      if (col.toString().includes("http")) {
        return <Avatar src={col.toString()} />;
      }
      return col;
    } else {
      if (Boolean(col)) {
        return <CheckBox />;
      } else if (!Boolean(col)) {
        return <CheckBoxOutlineBlank />;
      }
    }
  };

  const handleDeleteTableRow = (id: any) => {
    switch (data.data.name) {
      case SUPPLIERS:
        return dispatch(removeSupplier(id));
      case EQUIPMENTS:
        return dispatch(removeEquipment(id));
      case ENGINES:
        return dispatch(removeEngine(id));
      case BRANDS:
        return dispatch(removeBrand(id));
      case MODELS:
        return dispatch(removeModel(id));
      case CARS:
        return dispatch(removeCar(id));
      case SELLERS:
        return dispatch(removeSeller(id));
      default:
        return "";
    }
  };

  const handleOpenInsertModal = () => {
    dispatch(setInsertModalVisibility(true));
  };

  const getTableId = (table: any) => {
    switch (table) {
      case SUPPLIERS:
        return "supplierId";
      case EQUIPMENTS:
        return "equipmentId";
      case ENGINES:
        return "engineId";
      case BRANDS:
        return "brandId";
      case MODELS:
        return "modelId";
      case CARS:
        return "carId";
      case SELLERS:
        return "userId";
      default:
        return "";
    }
  };

  const handleOpenUpdateModal = (row: any) => {
    console.log(row);
    dispatch(setUpdateTable(row));
    dispatch(setUpdateModalVisibility(true));
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead ref={tableRef}>
            <TableRow>
              {data.columns.map((column: any, i: any) => (
                <StyledTableCell key={i}>{column}</StyledTableCell>
              ))}
              <StyledTableCell align="right">
                <Button variant="contained" onClick={handleOpenInsertModal}>
                  <Add /> Add new
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.map((row: any, i: any) => (
              <StyledTableRow key={i}>
                {Object.keys(data.data[0]).map(
                  (c: any, i: any) =>
                    data.dbColumns.includes(c) && (
                      <StyledTableCell key={i} component="th" scope="row">
                        {getColumn(row[c])}
                      </StyledTableCell>
                    )
                )}
                <StyledTableCell align="right">
                  <Button onClick={() => handleOpenUpdateModal(row)}>
                    <Create />
                  </Button>
                  <Button
                    color="primary"
                    onClick={() =>
                      handleDeleteTableRow(row[getTableId(data.data.name)])
                    }
                  >
                    <Delete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}
