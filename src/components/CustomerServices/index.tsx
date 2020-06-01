import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import { AddBoxSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(4),
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    icon: {
      fontSize: 45,
      verticalAlign: "middle",
    },
    heading: {
      textAlign: "center",
    },
  })
);

const services = [
  {
    title: "Special rates on car booking",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy  eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren.",
  },
  {
    title: "Mobile Phone Reservation",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy  eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren.",
  },
  {
    title: "Unlimited Miles Car Rental",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy  eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren.",
  },
  {
    title: "One Way Car Rentals",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy  eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren.",
  },
];

function Index() {
  const classes = useStyles();

  return (
    <Container>
      <h1 className={classes.heading}>Customer Services</h1>
      <Grid container>
        {services.map((service, i) => {
          return (
            <Grid key={i} item md={6}>
              <Paper className={classes.box} square elevation={0}>
                <h2>
                  <AddBoxSharp color="primary" className={classes.icon} />
                  &nbsp;
                  {service.title}
                </h2>
                <p>{service.description}</p>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Index;
