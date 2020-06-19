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
    options: ["Milho", "Arroz"],
    avatar: "",
  },
  {
    id: "p2",
    name: "Cuzcuz completo",
    category: "Cuzcuz",
    price: 3.25,
    options: ["Milho", "Arroz"],
    avatar: "",
  },
];

const tableOrders = [];

const appInitialState = {
  clients: tableClients,
  products: tableProducts,
  orders: tableOrders,
};

const orderInitialState = {
  products: [],
  clients: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "add_order": {
      const newOrder = action.payload;
      return { ...state, orders: [...state.orders, newOrder] };
    }
    default:
      return state;
  }
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "add_item": {
      const { productId } = action.payload;
      return { ...state, products: [...state.products, { id: productId }] };
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
                {/*<Link to={`${url}/pro1`}>Ver produto</Link>*/}
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

/*
import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import imgProducts from "../../assets/img-products.svg";

export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col modal-dialog-centered text-center justify-content-center">
          <nav>
            <Link to="/">
              <img src={logoImg} alt="Logo Appetit" />
            </Link>

            <ul>
              <li>
                <Link to="/home">
                  <MdList size={25} />
                  PEDIDOS
                </Link>
              </li>
              <ul>
                <li>
                  <Link to="/order/open">EM ABERTOS</Link>
                </li>
                <li>
                  <Link to="/order/closed">ENCERRADOS</Link>
                </li>
              </ul>
              <li>
                <Link to="/clients">
                  <MdPeople size={20} />
                  CLIENTES
                </Link>
              </li>
            </ul>

            <p className="copy">Infoway Gestão em Saúde &copy;, 2019.</p>
          </nav>
        </div>

        <div className="col">
          <section className="content">
            <h1>Novo pedido</h1>

            <img src={imgProducts} alt="Img Products" />

            <p>Acompanhe aqui um resumo desta venda.</p>
          </section>
        </div>

        <div className="col">
          <section className="content-aux">
            <h1>Informações para o pedido</h1>

            <p>Preencha as informações abaixo para concluir esta venda.</p>

            <p>Passo 1 de 3</p>
            <p>Barra de progresso</p>

            <strong>O que você está vendendo?</strong>

            <input type="text" placeholder="Procute o produto aqui..." />

            <ul>
              <li>Cuscuz</li>
              <ul>
                <li>Avatar</li>
                <li>Cuscuz Simples</li>
                <li>Preço</li>
              </ul>
              <ul>
                <li>Avatar</li>
                <li>Cuscuz Completo</li>
                <li>Preço</li>
              </ul>
            </ul>
            <ul>
              <li>Pães</li>
              <ul>
                <li>Avatar</li>
                <li>Pão Caseiro</li>
                <li>Preço</li>
              </ul>
              <ul>
                <li>Avatar</li>
                <li>Pão caseiro completo</li>
                <li>Preço</li>
              </ul>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
*/
