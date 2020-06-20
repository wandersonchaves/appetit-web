import React from "react";
import Grid from "@material-ui/core/Grid";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTItle";
import OrderInfo from "../OrderInfo";
import OrderDetail from "../OrderDetail";
import { OrderContext } from "../../context";
import NewOrderImage from "./NewOrderImage";
import SelectedItemsAndClientsList from "./SelectedItemsAndClientsList";

// product = {productId, option, quantity, note, price}
const orderInitialState = {
  id: "",
  step: 1,
  status: "",
  finished: false,
  total: 0,
  date: new Date(),
  products: {},
  clients: {},
};

const sumTotal = (items) => {
  let sum = 0;
  Object.keys(items).forEach((id) => {
    sum += items[id].quantity * items[id].price;
  });
  return sum;
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "save_item": {
      const item = action.payload;
      const newItems = {
        ...state.products,
        [item.productId]: item,
      };

      return {
        ...state,
        total: sumTotal(newItems),
        products: newItems,
      };
    }
    case "save_clients": {
      return { ...state, clients: { ...state.clients, ...action.clients } };
    }
    case "next_step": {
      return { ...state, step: state.step + 1 };
    }
    case "finish_order": {
      const { status, payDate } = action;
      return { ...state, status, payDate, finished: true };
    }
    default:
      return state;
  }
};

export default function Productos() {
  let { path } = useRouteMatch();
  const [orderState, orderDispatch] = React.useReducer(
    orderReducer,
    orderInitialState
  );

  return (
    <Layout>
      <Grid container>
        <OrderContext.Provider
          value={{ state: orderState, dispatch: orderDispatch }}
        >
          <Grid item sm={6}>
            <PageTitle mx={5} to="/home" title="Novo pedido" />
            {orderState.step === 1 && <NewOrderImage />}
            {orderState.step > 1 && <SelectedItemsAndClientsList />}
          </Grid>
          <Grid item sm={6} style={{ backgroundColor: "#f5f5f5" }}>
            <Switch>
              <Route exact path={path}>
                <OrderInfo />
              </Route>
              <Route path={`${path}/:productId`}>
                <OrderDetail />
              </Route>
            </Switch>
          </Grid>
        </OrderContext.Provider>
      </Grid>
    </Layout>
  );
}
