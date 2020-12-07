import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Avatar,
  CssBaseline,
  Paper,
} from "@material-ui/core";

import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import NaturalPersonForm from "../Home/RegisterCustomerForm/NaturalPersonForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterSellerForm = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <NaturalPersonForm />
      </Paper>
    </Container>
  );
};

export default RegisterSellerForm;
