import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

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

const soldCars = [
  {
    brandName: "Audi",
    modelName: "A6",
    image: "http://carrental.themeinjection.com/theme/img/vehicle4.jpg",
  },
  {
    brandName: "BMW",
    modelName: "X6",
    image: "http://carrental.themeinjection.com/theme/img/vehicle3.jpg",
  },
  {
    brandName: "Fiat",
    modelName: "Punto",
    image: "http://carrental.themeinjection.com/theme/img/vehicle2.jpg",
  },
];

function SoldCars() {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.heading}>Recently sold cars</h2>
      <Grid container alignItems="center" justify="center" spacing={1}>
        {soldCars.map((car, i) => {
          return (
            <Grid item key={i} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={car.brandName + " " + car.modelName}
                    height="190"
                    image={car.image}
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
