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

import initialState from "./data";
import { AppContext } from "./context";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_order": {
      return { ...state, orders: [...state.orders, action.order] };
    }
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/orders/:id" component={Orders} />
          <Route path="/products" component={Products} />
          <Route path="/clients" component={Clients} />
          <Route path="/pay" component={Pay} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
