import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Reg from "../Reg";
import Home from "../../Home";
import Charts from "../Charts";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Reg />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Reg">
            <Reg />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Charts">
            <Charts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
