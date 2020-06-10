import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsSoldByUser } from "../../redux-store/userProfile/actions";
import { AppState } from "../../redux-store";
import { Vehicle } from "../../data/models/Vehicle";
import { defaultImage } from "../../data/models/Image";

const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: theme.spacing(1),
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

function SoldCars() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userProfile = useSelector((state: AppState) => state.userProfile);
  const { currentUser, boughtCars } = userProfile;

  useEffect(() => {
    dispatch(fetchCarsSoldByUser(currentUser.userId));
  }, [dispatch, currentUser.userId]);
  return (
    <>
      <h2 className={classes.heading}>Recently bought cars</h2>
      <Grid container alignItems="center" justify="center" spacing={1}>
        {boughtCars.map((car: Vehicle, i: number) => {
          return (
            <Grid item key={i} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={car.brandName + " " + car.modelName}
                    height="190"
                    image={
                      defaultImage.path +
                      defaultImage.name +
                      "." +
                      defaultImage.extension
                    }
                    title={car.brandName + " " + car.modelName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {car.brandName + " " + car.modelName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default SoldCars;
