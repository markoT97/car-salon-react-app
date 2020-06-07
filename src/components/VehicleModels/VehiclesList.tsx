import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, ButtonGroup, FormControl, Select } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux-store/index";
import { Vehicle } from "../../data/models/Vehicle";
import {
  selectVehicle,
  fetchVehicles,
} from "../../redux-store/vehicleList/actions";

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
    selected: Vehicle,
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(selectVehicle(selected));
  };

  const handleMoveInList = (
    list: Array<Vehicle>,
    currentItem: Vehicle,
    moveSteps: number
  ) => {
    const nextSelectedItem =
      list[
        list.map((item) => item.carId).indexOf(currentItem.carId) + moveSteps
      ];

    handleListItemClick(nextSelectedItem as typeof currentItem);
  };

  const vehicleList = useSelector((state: AppState) => state.vehicleList);
  const { vehicles } = vehicleList;
  const { selectedVehicle } = vehicleList;

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.list}
        >
          {vehicles.map((vehicle: Vehicle, i: any) => {
            return (
              <ListItem
                key={i}
                button
                selected={vehicle.carId === selectedVehicle.carId}
                autoFocus={vehicle.carId === selectedVehicle.carId}
                className={classes.listItem}
                onClick={(event) => handleListItemClick(vehicle, event)}
              >
                <ListItemText
                  primary={vehicle.brandName + " " + vehicle.modelName}
                />
              </ListItem>
            );
          })}
        </List>

        <ButtonGroup fullWidth variant="contained">
          <Button
            className={classes.expandListButtons}
            onClick={() => handleMoveInList(vehicles, selectedVehicle, -1)}
            disabled={
              !(
                vehicles
                  .map((vehicle) => vehicle.carId)
                  .indexOf(selectedVehicle.carId) > 0
              )
            }
          >
            <ExpandLess className={classes.expandListIcon} />
          </Button>

          <Button
            className={classes.expandListButtons}
            onClick={() => handleMoveInList(vehicles, selectedVehicle, 1)}
            disabled={
              !(
                vehicles
                  .map((vehicle) => vehicle.carId)
                  .indexOf(selectedVehicle.carId) <
                vehicles.length - 1
              )
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
          value={selectedVehicle.carId}
          onChange={(event) => {
            const selectedVehicle = vehicles.find(
              (vehicle) =>
                vehicle.carId === parseInt(event.target.value as string)
            );

            handleListItemClick(selectedVehicle as Vehicle);
          }}
        >
          {vehicles.map((vehicle: Vehicle, i: number) => {
            return (
              <option key={i} value={vehicle.carId}>
                {vehicle.brandName + " " + vehicle.modelName}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectedListItem;
