import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import theme from "../../theme";
import PageTitle from "../../components/PageTItle";
import { AppContext, OrderContext } from "../../context";
import { IconButton, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 190,
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
  addContainer: {
    boxShadow: `5px 1px 8px 1px #ddd`,
    borderLeft: "none",
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  },
  quantityArea: {
    display: "flex",
    paddingLeft: theme.spacing(3),
    position: "relative",
    "& p": {
      alignSelf: "center",
    },
  },
  addArea: {
    display: "flex",
    alignItems: "center",
  },
});

const ProductListItem = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingLeft: 0,
  },
}))(ListItem);

const AddItemButton = withStyles((theme) => ({
  root: {
    borderRadius: 4,
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    textTransform: "none",
  },
}))(Button);

const findProduct = (id, products) => products.find((p) => p.id === id);

export default function OrderDetail() {
  const classes = useStyles();
  const history = useHistory();
  const { productId } = useParams();

  const {
    state: { products },
  } = React.useContext(AppContext);
  const { state: currentOrder, dispatch } = React.useContext(OrderContext);
  const product = findProduct(productId, products);
  const orderItem = currentOrder.products[productId] || {};

  const [selectedOption, setSelectedOption] = React.useState(orderItem.option);
  const [quantity, setQuantity] = React.useState(orderItem.quantity || 1);
  const [note, setNote] = React.useState(orderItem.note || "");

  if (!product) {
    return <Redirect to="/products" />;
  }

  const handleAddItem = () => {
    dispatch({
      type: "save_item",
      payload: {
        productId,
        quantity,
        note,
        price: product.price,
        option: selectedOption,
      },
    });
    history.push("/products");
  };

  return (
    // let { productId } = useParams();
    <>
      <PageTitle mx={5} to="/products" title="Detalhes do pedido" />
      <Box mx={5} mt={2}>
        <Typography component="h2" variant="subtitle1">
          Aproveite para adicionar alguma observação para este pedido, caso
          queira.
        </Typography>
      </Box>

      <Box mx={5} mt={2}>
        <List>
          <ProductListItem key={product.id}>
            <ListItemAvatar>
              <Avatar alt={product.name} src={product.avatar} />
            </ListItemAvatar>
            <ListItemText
              id={`label-product-${product.id}`}
              primary={product.name}
              secondary={product.price}
            />
          </ProductListItem>
        </List>
      </Box>

      <Box mx={5} mt={2}>
        <Typography variant="subtitle1">Opções</Typography>
        <Typography variant="subtitle2">
          Escolha dentre as opções de massas abaixo.
        </Typography>
      </Box>

      <Box mx={5} mt={2}>
        <List>
          {product.options.map((option) => {
            const labelId = `checkbox-list-label-${option.id}`;

            return (
              <ListItem
                key={option.id}
                dense
                button
                onClick={() => setSelectedOption(option.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={option.id === selectedOption}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={option.name} />
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box mx={5} mt={2}>
        <Typography>Observações</Typography>
        <TextField
          id="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          placeholder="Observações"
          fullWidth
          variant="outlined"
        />
      </Box>

      {selectedOption && (
        <Grid container className={classes.addContainer}>
          <Grid item xs className={classes.quantityArea}>
            <IconButton
              disabled={quantity <= 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              <RemoveIcon color={quantity > 1 ? "primary" : "inherit"} />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={() => setQuantity(quantity + 1)}>
              <AddIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item xs className={classes.addArea}>
            <AddItemButton
              variant="contained"
              color="primary"
              onClick={handleAddItem}
            >
              <span>Adicionar</span>
              <span>R$ {quantity * product.price}</span>
            </AddItemButton>
          </Grid>
        </Grid>
      )}
    </>
  );
}
