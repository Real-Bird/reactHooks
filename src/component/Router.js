import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import BasicRoute from "../router/BasicRoute";
import Navigation from "./Navi";
import Input from "../router/Input";
import Taps from "../router/Taps";

const AppRouter = () => {
  return (
    <>
      <Router base="/">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <BasicRoute />
          </Route>
          <Route exact path="/useinput">
            <Input />
          </Route>
          <Route exact path="/usetaps">
            <Taps />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
