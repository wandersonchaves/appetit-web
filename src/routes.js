import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAutenticated } from "./auth";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Order from "./pages/Order";
import orderShow from "./pages/orderShow";
import Products from "./pages/Products";
import productDetails from "./pages/productDetails";
import productsFinished from "./pages/productsFinished";
import Clientes from "./pages/Clientes";

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
        <Route exact path="/order" component={Order} />
        <Route path="/order/show" component={orderShow} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/details" component={productDetails} />
        <Route path="/products/finished" component={productsFinished} />
        <Route path="/clientes" component={Clientes} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
