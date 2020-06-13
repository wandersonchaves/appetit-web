import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Routes = () => (
  // eslint-disable-next-line no-unused-expressions
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
