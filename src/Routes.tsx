import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import VehicleModels from "./components/VehicleModels";
import CustomerServices from "./components/CustomerServices";
import Contact from "./components/Contact";
import RegisterForm from "./components/UserEntries/RegisterForm";
import LoginForm from "./components/UserEntries/LoginForm";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={CustomerServices} />
      <Route exact path="/vehicle-models" component={VehicleModels} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/my-profile" component={Profile} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default Routes;
