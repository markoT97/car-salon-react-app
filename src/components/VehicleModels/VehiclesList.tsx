import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, ButtonGroup, FormControl, Select } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux-store/index";
import { VehicleModel } from "../../data/models/VehicleModel";
import { selectVehicleModel } from "../../redux-store/vehicleList/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    list: {
      height: 320,
      overflow: "hidden",
    },
    listItem: {
      height: 50,
      marginBottom: 2,
      backgroundColor: theme.palette.grey[300],
      "&:hover": {
        backgroundColor: theme.palette.grey[400],
      },
    },
    expandListButtons: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
      },
    },
    expandListIcon: {
      fontSize: 30,
      fontWeight: "bold",
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

function SelectedListItem() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleListItemClick = (
    selected: VehicleModel,
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(selectVehicleModel(selected));
  };

  const handleMoveInList = (
    list: Array<VehicleModel>,
    currentItem: VehicleModel,
    moveSteps: number
  ) => {
    const nextSelectedItem =
      list[
        list.map((item) => item.carId).indexOf(currentItem.carId) + moveSteps
      ];

    handleListItemClick(nextSelectedItem as typeof currentItem);
  };

  const vehicleList = useSelector((state: AppState) => state.vehicleList);
  const { vehicleModels } = vehicleList;
  const { selectedModel } = vehicleList;

  return (
    <>
      <div className={classes.root}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.list}
        >
          {vehicleModels.map((car: VehicleModel, i: any) => {
            return (
              <ListItem
                key={i}
                button
                selected={car.carId === selectedModel.carId}
                autoFocus={car.carId === selectedModel.carId}
                className={classes.listItem}
                onClick={(event) => handleListItemClick(car, event)}
              >
                <ListItemText primary={car.brandName + " " + car.modelName} />
              </ListItem>
            );
          })}
        </List>

        <ButtonGroup fullWidth variant="contained">
          <Button
            className={classes.expandListButtons}
            onClick={() => handleMoveInList(vehicleModels, selectedModel, -1)}
            disabled={!(vehicleModels.indexOf(selectedModel) > 0)}
          >
            <ExpandLess className={classes.expandListIcon} />
          </Button>

          <Button
            className={classes.expandListButtons}
            onClick={() => handleMoveInList(vehicleModels, selectedModel, 1)}
            disabled={
              !(vehicleModels.indexOf(selectedModel) < vehicleModels.length - 1)
            }
          >
            <ExpandMore className={classes.expandListIcon} />
          </Button>
        </ButtonGroup>
      </div>

      <FormControl variant="outlined" className={classes.sectionMobile}>
        <Select
          native
          id="select"
          value={selectedModel.carId}
          onChange={(event) => {
            const selectedCar = vehicleModels.find(
              (car) => car.carId === parseInt(event.target.value as string)
            );

            handleListItemClick(selectedCar as VehicleModel);
          }}
        >
          {vehicleModels.map((car: VehicleModel, i: any) => {
            return (
              <option key={i} value={car.carId}>
                {car.brandName + " " + car.modelName}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectedListItem;
