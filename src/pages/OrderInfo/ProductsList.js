import React from "react";
import {
  Box,
  List,
  ListSubheader,
  Typography,
  withStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  useTheme,
  Button,
} from "@material-ui/core";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import { useHistory } from "react-router-dom";
import { OrderContext, AppContext } from "../../context";

const getProductsByCategory = (products) => {
  const result = [];
  const findGroup = (name) => result.find((group) => group.name === name);

  products.forEach((product) => {
    const group = findGroup(product.category);
    if (group) {
      group.products.push(product);
    } else {
      result.push({ name: product.category, products: [product] });
    }
  });
  return result;
};

// retorna um object com os produtos tendo o id como chave
const getProductsById = (products) => {
  const result = {};
  products.forEach((product) => {
    result[product.id] = product;
  });
  return result;
};

const ProductListItem = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #ddd",
  },
}))(ListItem);

const NextButton = withStyles((theme) => ({
  root: {
    borderRadius: 5,
  },
}))(Button);

export default function ProductsList() {
  const history = useHistory();
  const theme = useTheme();

  const {
    state: { products },
  } = React.useContext(AppContext);
  const { state: order, dispatch } = React.useContext(OrderContext);
  const productsByCategory = getProductsByCategory(products);
  const productsById = getProductsById(products);

  // soma da quantidade e preco de cada produto do pedido
  const getTotal = () => {
    let total = 0;
    Object.keys(order.products).forEach((id) => {
      total += order.products[id].quantity * productsById[id].price;
    });
    return total;
  };

  const hasProducts = () => Object.keys(order.products).length > 0;

  return (
    <>
      <Box px={3} pt={2}>
        {productsByCategory.map((category, i) => (
          <List
            dense
            key={i}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Typography variant="subtitle2">{category.name}</Typography>
              </ListSubheader>
            }
          >
            {category.products.map((product) => {
              const labelId = `checkbox-list-secondary-label-${product.id}`;

              return (
                <ProductListItem
                  color="#000"
                  key={product.id}
                  button
                  onClick={() => history.push(`/products/${product.id}`)}
                >
                  <ListItemAvatar>
                    {order.products[product.id] ? (
                      <Avatar>
                        <CheckCircleOutlinedIcon />
                      </Avatar>
                    ) : (
                      <Avatar alt={product.name} src={product.avatar} />
                    )}
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={product.name} />
                  <ListItemSecondaryAction>
                    <Typography variant="body2">{product.price}</Typography>
                  </ListItemSecondaryAction>
                </ProductListItem>
              );
            })}
          </List>
        ))}
      </Box>
      {hasProducts() && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor={theme.palette.primary.main}
        >
          <Box mx={3} my={2} color="#fff">
            <b>Total: R$ {getTotal()}</b>
          </Box>
          <Box m={2}>
            <NextButton
              style={{ color: "#fff" }}
              endIcon={<ChevronRightOutlinedIcon />}
              onClick={() => dispatch({ type: "next_step" })}
            >
              Avançar
            </NextButton>
          </Box>
        </Box>
      )}
    </>
  );
}
