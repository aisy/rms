import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

// import pages
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

const RouterApp = () => {
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/home"} component={HomePage} />

      {/* user */}
      <Route path={"/user/login"} exact component={LoginPage} />
    </Switch>
  );
}

export default RouterApp;

