import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

// import pages
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

import Warehouse from '../pages/Warehouse';

// not found pages if path or component not found
import NotFound from '../pages/NotFound';

const RouterApp = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={HomePage} />
      <Route path={"/home"} component={HomePage} />
      <Route path={"/warehouse"} component={Warehouse} />

      {/* user */}
      <Route path={"/user/login"} exact component={LoginPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default RouterApp;

