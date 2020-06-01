import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    paper: {
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        height: "25em",
      },
    },
    heading: {
      padding: 0,
      margin: 0,
      textTransform: "uppercase",
      color: theme.palette.primary.contrastText,
      //fontSize: 40,
    },
    paragraph: {
      padding: 0,
      margin: 0,
      //fontSize: 24,
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      padding: "4em 0",
    },
  })
);

function Slideshow() {
  const classes = useStyles();
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing!",
      image: "http://carrental.themeinjection.com/theme/img/car1.png",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "http://carrental.themeinjection.com/theme/img/car2.png",
    },
  ];

  return (
    <Carousel
      animation="slide"
      timeout={700}
      indicators={false}
      className={classes.paper}
    >
      {items.map((item, i) => {
        return (
          <div key={i}>
            <h1 className={classes.heading}>{item.name}</h1>
            <p className={classes.paragraph}>{item.description}</p>

            <img src={item.image} alt={item.name} className={classes.image} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slideshow;
