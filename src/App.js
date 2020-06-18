import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Pay from "./pages/Pay";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route path="/orders/:id" component={Orders} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/clients" component={Clients} />
        <Route path="/pay" component={Pay} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}
