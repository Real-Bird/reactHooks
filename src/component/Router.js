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
import Effect from "../router/Effect";
import Effect2 from "../router/Effect2";
import Effect3 from "../router/Effect3";

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
          <Route exact path="/useeffect">
            <Effect />
          </Route>
          <Route exact path="/useeffect2">
            <Effect2 />
          </Route>
          <Route exact path="/useeffect3">
            <Effect3 />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
