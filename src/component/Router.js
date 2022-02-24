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
import Title from "../router/Title";
import Click from "../router/Click";
import Confirm from "../router/Confirm";
import PreventLeave from "../router/PreventLeave";
import BeforeLeave from "../router/BeforeLeave";
import FadeIn from "../router/FadeIn";
import Network from "../router/Network";

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
          <Route exact path="/usetitle">
            <Title />
          </Route>
          <Route exact path="/useclick">
            <Click />
          </Route>
          <Route exact path="/useconfirm">
            <Confirm />
          </Route>
          <Route exact path="/usepreventleave">
            <PreventLeave />
          </Route>
          <Route exact path="/usebeforeleave">
            <BeforeLeave />
          </Route>
          <Route exact path="/usefadein">
            <FadeIn />
          </Route>
          <Route exact path="/usenetwork">
            <Network />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
