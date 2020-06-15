import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAutenticated } from "./auth";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Order from "./pages/Order";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/order" component={Order} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
