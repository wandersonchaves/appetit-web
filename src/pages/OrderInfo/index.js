import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import PageTitle from "../../components/PageTItle";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import avatar1 from "../../assets/avatarProducts/avatar1.png";

const productsByCategory = [
  {
    name: "Cuzcuz",
    products: [
      {
        id: "p1",
        name: "Cuzcuz simples",
        category: "Cuzcuz",
        price: "R$ 2,25",
        avatar: avatar1,
      },
    ],
  },
  {
    name: "Pães",
    products: [
      {
        id: "p2",
        name: "Pão caseiro",
        category: "Pães",
        price: "R$ 2,25",
        avatar: avatar1,
      },
    ],
  },
];

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 300 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);

const ProductListItem = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #ddd",
  },
}))(ListItem);

// TODO criar arquivo OrderInfo/index.js
export default function OrderInfo() {
  const history = useHistory();

  return (
    <>
      <PageTitle mx={5} title="Informações para o pedido" />
      <Box mx={5} mt={2}>
        <Typography component="h2" variant="subtitle1">
          Preencha as informações abaixo para concluir esta venda.
        </Typography>
      </Box>
      <Box mx={5} mt={2}>
        <Typography variant="subtitle1">Passo 1 de 3</Typography>
        <BorderLinearProgress variant="determinate" value={33} />
      </Box>
      <Box mx={5} mt={3}>
        <Typography variant="subtitle1">O que você está vendendo?</Typography>
      </Box>
      <Box mx={5} mt={2}>
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
          }}
        />
      </Box>
      <Box mx={5} mt={2}>
        {productsByCategory.map((category, i) => (
          <List
            dense
            key={i}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Typography>{category.name}</Typography>
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
                    <Avatar alt={product.name} src={product.avatar} />
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
    </>
  );
}

/*

[
  {
    name: 'Cuzcuz'
    products: [
      {id: 'p1', name: 'Cuzcuz simples', category: 'Cuzcuz', price: 3.25}
    ]
  },
  {
    name: 'Pães',
    products: [

    ]
  }
]
 */
