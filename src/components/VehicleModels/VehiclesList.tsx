import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, ButtonGroup, FormControl, Select } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

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

function SelectedListItem({ carsList, selectedCar, setSelectedCar }: any) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    index: number,
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setSelectedIndex(index);
    setSelectedCar(carsList[index]);
  };

  return (
    <>
      <div className={classes.root}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.list}
        >
          {carsList.map((car: any, i: any) => {
            return (
              <ListItem
                key={i}
                button
                selected={i === selectedIndex}
                autoFocus={i === selectedIndex}
                className={classes.listItem}
                onClick={(event) => handleListItemClick(i, event)}
              >
                <ListItemText
                  primary={
                    car.brandName + " " + car.modelName + " " + car.model
                  }
                />
              </ListItem>
            );
          })}
        </List>

        <ButtonGroup fullWidth variant="contained">
          <Button
            className={classes.expandListButtons}
            onClick={(event) => handleListItemClick(selectedIndex - 1)}
            disabled={!(selectedIndex > 0)}
          >
            <ExpandLess className={classes.expandListIcon} />
          </Button>

          <Button
            className={classes.expandListButtons}
            onClick={(event) => handleListItemClick(selectedIndex + 1)}
            disabled={!(selectedIndex < carsList.length - 1)}
          >
            <ExpandMore className={classes.expandListIcon} />
          </Button>
        </ButtonGroup>
      </div>

      <FormControl variant="outlined" className={classes.sectionMobile}>
        <Select
          native
          id="select"
          value={selectedIndex}
          onChange={(event) =>
            handleListItemClick((event.target.value as unknown) as number)
          }
        >
          {carsList.map((car: any, i: any) => {
            return (
              <option key={i} value={i}>
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
