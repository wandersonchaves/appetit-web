import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Switch, useRouteMatch, Route, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTItle";
import imgProducts from "../../assets/img-products.svg";
import OrderInfo from "../OrderInfo";
import OrderDetail from "../OrderDetail";
import { AppContext, OrderContext } from "../../context";

const tableClients = [
  { id: "c1", name: "Justine Marshall", avatar: "" },
  { id: "c2", name: "Bairan Frootan", avatar: "" },
  { id: "c3", name: "Tua Manuera", avatar: "" },
  { id: "c4", name: "Maria Aparecida", avatar: "" },
  { id: "c5", name: "Wanderson Chaves", avatar: "" },
];
const tableProducts = [
  {
    id: "p1",
    name: "Cuzcuz simples",
    category: "Cuzcuz",
    price: 2.25,
    options: [
      { id: "p1o1", name: "Milho" },
      { id: "p1o2", name: "Arroz" },
    ],
    avatar: "",
  },
  {
    id: "p2",
    name: "Cuzcuz completo",
    category: "Cuzcuz",
    price: 3.25,
    options: [
      { id: "p2o1", name: "Milho" },
      { id: "p2o2", name: "Arroz" },
    ],
    avatar: "",
  },
];

const tableOrders = [];

const appInitialState = {
  clients: tableClients,
  products: tableProducts,
  orders: tableOrders,
};

// product = {productId, option, quantity, note}
const orderInitialState = {
  products: {},
  clients: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "add_order": {
      console.log(action);
      const newOrder = action.payload;
      return { ...state, orders: [...state.orders, newOrder] };
    }
    case "add_clients": {
      console.log(action);
      return { ...state, clients: action.payload };
    }
    default:
      return state;
  }
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "save_item": {
      const item = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          [item.productId]: item,
        },
      };
    }
    default:
      return state;
  }
};

const useStyles = makeStyles((theme) => ({
  title: {
    width: 230,
  },
  titleDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 3,
  },
  areaImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 120,
  },
}));

export default function Productos() {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const [appState, appDispatch] = React.useReducer(appReducer, appInitialState);
  const [orderState, orderDispatch] = React.useReducer(
    orderReducer,
    orderInitialState
  );

  return (
    <Layout>
      <Grid container>
        <AppContext.Provider value={{ state: appState, dispatch: appDispatch }}>
          <OrderContext.Provider
            value={{ state: orderState, dispatch: orderDispatch }}
          >
            <Grid item sm={6}>
              <PageTitle mx={5} to="/home" title="Novo pedido" />
              <Box className={classes.areaImg}>
                <img alt="Img Produtos" src={imgProducts} />
                <Typography component="h3" variant="subtitle1" align="center">
                  Acompanhe aqui um resumo desta venda
                </Typography>
              </Box>
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
        </AppContext.Provider>
      </Grid>
    </Layout>
  );
}
