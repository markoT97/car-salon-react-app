import React from "react";
import { Switch } from "react-router";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Home from "./components/Home";
import VehicleModels from "./components/VehicleModels";
import CustomerServices from "./components/CustomerServices";
import Contact from "./components/Contact";
import RegisterForm from "./components/UserEntries/RegisterForm";
import LoginForm from "./components/UserEntries/LoginForm";
import Profile from "./components/Profile";
import UpdateProfileData from "./components/UpdateProfileData";
//import Dashboard from "./components/Dashboard";
import getIsLoggedIn from "./utils/getIsLoggedIn";
import Loading from "./containers/Loading";
import NotFound from "./containers/NotFound";

const requireLogin = (to: any, from: any, next: any) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

function Routes() {
  return (
    <GuardProvider guards={[requireLogin]} loading={Loading} error={"Error"}>
      <Switch>
        <GuardedRoute exact path="/" component={Home} />
        <GuardedRoute exact path="/services" component={CustomerServices} />
        <GuardedRoute exact path="/vehicle-models" component={VehicleModels} />
        <GuardedRoute exact path="/contact" component={Contact} />
        <GuardedRoute exact path="/register" component={RegisterForm} />
        <GuardedRoute exact path="/login" component={LoginForm} />
        <GuardedRoute
          exact
          path="/my-profile"
          component={Profile}
          meta={{ auth: true }}
        />
        <GuardedRoute
          exact
          path="/settings"
          component={UpdateProfileData}
          meta={{ auth: true }}
        />
        <GuardedRoute path="*" component={NotFound} />
      </Switch>
    </GuardProvider>
  );
}

export default Routes;
