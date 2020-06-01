import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import VehiclesList from "./VehiclesList";
import VehicleInfo from "./VehicleInfo";
import FilterData from "./FilterData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: "100%",
      height: "auto",
    },
  })
);

const carsList = [
  {
    brandName: "Audi",
    modelName: "A6",
    image: "http://carrental.themeinjection.com/theme/img/vehicle6.jpg",
    model: "S453",
    doors: 4,
    seats: 4,
    transmission: "Manual",
    airConditioning: "Yes",
  },
  {
    brandName: "Wolkswagen",
    modelName: "Golf 4",
    image: "http://carrental.themeinjection.com/theme/img/vehicle5.jpg",
    model: "T5236",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    airConditioning: "No",
  },
  {
    brandName: "BMW",
    modelName: "X6",
    image: "http://carrental.themeinjection.com/theme/img/vehicle4.jpg",
    model: "Y456",
    doors: 5,
    seats: 4,
    transmission: "Manual",
    airConditioning: "Yes",
  },
  {
    brandName: "Fiat",
    modelName: "Punto",
    image: "http://carrental.themeinjection.com/theme/img/vehicle3.jpg",
    model: "U454",
    doors: 4,
    seats: 4,
    transmission: "Automatic",
    airConditioning: "No",
  },
  {
    brandName: "Toyota",
    modelName: "Yaris",
    image: "http://carrental.themeinjection.com/theme/img/vehicle2.jpg",
    model: "Q2355",
    doors: 4,
    seats: 4,
    transmission: "Manual",
    airConditioning: "Yes",
  },
  {
    brandName: "Opel",
    modelName: "Astra",
    image: "http://carrental.themeinjection.com/theme/img/vehicle1.jpg",
    model: "W3356",
    doors: 4,
    seats: 4,
    transmission: "Automatic",
    airConditioning: "Yes",
  },
];

function Index() {
  const classes = useStyles();

  const [selectedCar, setSelectedCar] = React.useState(carsList[0]);

  return (
    <>
      <Container>
        <h1>Vehicle Models</h1>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <FilterData />
          </Grid>
          <Grid item xs={12} sm={3}>
            <VehiclesList
              carsList={carsList}
              selectedCar={selectedCar}
              setSelectedCar={(car: any) => setSelectedCar(car)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={selectedCar.image} alt="" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <VehicleInfo selectedCar={selectedCar} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Index;
