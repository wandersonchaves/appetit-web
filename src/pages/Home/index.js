import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import { Link as RouterLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterIcon from "@material-ui/icons/Tune";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTItle";
import { AppContext } from "../../context";

const NovoPedidoButton = withStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
}))(Button);

const getProductsById = (products) => {
  const result = {};
  products.forEach((product) => {
    result[product.id] = product;
  });
  return result;
};

const getClientsById = (clients) => {
  const result = {};
  clients.forEach((client) => {
    result[client.id] = client;
  });
  return result;
};

const getOrdersByDate = (orders) => {
  const result = [];
  const findGroup = (date) => result.find((r) => r.date === date);

  orders.forEach((order) => {
    const date = format(order.date, "dd/MM/yyyy");
    const group = findGroup(date);
    if (group) {
      group.total += order.total;
      group.orders.push(order);
    } else {
      result.push({
        date: date,
        total: order.total,
        orders: [order],
      });
    }
  });

  return result;
};

const getFirstClient = (order, clients) => {
  const id = Object.keys(order.clients)[0];
  return clients[id];
};

// retorna os nomes e quantidade separado por virgula de cada produto do pedido
const getProductsDescription = (order, products) => {
  const result = [];
  Object.keys(order.products).forEach((id) => {
    const orderItem = order.products[id];
    const product = products[id];
    let description = product.name;
    if (orderItem.quantity > 1) {
      description = `${orderItem.quantity}x ${description}`;
    }
    result.push(description);
  });
  return `${result.join(`, `)}.`;
};

export default function Home() {
  const history = useHistory();
  const {
    state: { orders, clients, products },
  } = React.useContext(AppContext);
  const productsById = getProductsById(products);
  const clientsById = getClientsById(clients);
  // TODO order por data decrescente
  const ordersByDate = getOrdersByDate(orders);

  return (
    <Layout>
      <Box mx={5}>
        <PageTitle mx={0} mb={2} title="Olá, Vanusa" />

        <Box>
          <NovoPedidoButton
            startIcon={<AddIcon color="primary" />}
            fullWidth
            variant="contained"
            component={RouterLink}
            to="/products"
          >
            Fazer Novo Pedido
          </NovoPedidoButton>
        </Box>
        <Box mt={3}>
          <TextField
            id="search-order"
            placeholder="Procure o pedido aqui..."
            fullWidth
            style={{ paddingLeft: 4, paddingRight: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <FilterIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          {ordersByDate.map((dateOrders, i) => (
            <List
              dense
              key={i}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <p>
                    <strong>{dateOrders.date}</strong>, Você vendeu{" "}
                    <strong>{dateOrders.total}</strong>
                  </p>
                </ListSubheader>
              }
            >
              {dateOrders.orders.map((order) => {
                const client = getFirstClient(order, clientsById);
                const productsDescription = getProductsDescription(
                  order,
                  productsById
                );

                return (
                  <ListItem
                    key={order.id}
                    button
                    onClick={() => history.push(`/orders/${order.id}`)}
                  >
                    <ListItemAvatar>
                      <Avatar alt={client.name} src={client.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${client.name}`}
                      secondary={productsDescription}
                    />
                    <ListItemSecondaryAction>
                      <Typography>R$ {order.total}</Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
