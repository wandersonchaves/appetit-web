import React from "react";
import {
  Divider,
  Box,
  Typography,
  List,
  ListItem,
  withStyles,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { OrderContext, AppContext } from "../../context";

const CustomListItem = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}))(ListItem);

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

export default function SelectedItemsAndClientsList() {
  const {
    state: { clients, products },
  } = React.useContext(AppContext);
  const { state: order } = React.useContext(OrderContext);
  const productsById = getProductsById(products);
  const clientsById = getClientsById(clients);

  const orderItems = Object.keys(order.products).map(
    (id) => order.products[id]
  );
  const orderClients = Object.keys(order.clients).map(
    (id) => order.clients[id]
  );

  return (
    <>
      {orderItems.length > 0 && (
        <>
          <Box mx={5} mt={3}>
            <Typography variant="h6" component="h3">
              Produtos
            </Typography>
            <List>
              {orderItems.map((item) => (
                <CustomListItem key={item.productId}>
                  <ListItemAvatar>
                    <Avatar
                      alt={productsById[item.productId].name}
                      src={productsById[item.productId].avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${item.quantity}x ${
                      productsById[item.productId].name
                    }`}
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="body2">
                      R$ {item.quantity * productsById[item.productId].price}
                    </Typography>
                  </ListItemSecondaryAction>
                </CustomListItem>
              ))}
            </List>
          </Box>
          <Divider />
        </>
      )}
      {orderClients.length > 0 && (
        <>
          <Box mx={5} mt={3}>
            <Typography variant="h6" component="h3">
              Clientes
            </Typography>
            <List>
              {orderClients.map((clientId) => (
                <CustomListItem key={clientId}>
                  <ListItemAvatar>
                    <Avatar
                      alt={clientsById[clientId].name}
                      src={clientsById[clientId].avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={clientsById[clientId].name} />
                </CustomListItem>
              ))}
            </List>
          </Box>
          <Divider />
        </>
      )}
      {orderItems.length > 0 && (
        <Box mx={5} mt={3} display="flex" justifyContent="space-between">
          <Typography>Total</Typography>
          <Typography>R$ {order.total}</Typography>
        </Box>
      )}
    </>
  );
}
