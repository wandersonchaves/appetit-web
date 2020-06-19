import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import theme from "../../theme";
import PageTitle from "../../components/PageTItle";
import avatar1 from "../../assets/avatarProducts/avatar1.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
});

const ProductListItem = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #ddd",
  },
}))(ListItem);

const productDetail = [
  {
    id: "p2",
    name: "Cuzcuz completo",
    category: "Cuzcuz",
    price: "R$ 3,25",
    avatar: avatar1,
  },
];

const options = [
  {
    id: "opt1",
    name: "Milho",
  },
  {
    id: "opt2",
    name: "Arroz",
  },
];

export default function OrderDetail() {
  const history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
        <List dense>
          {productDetail.map((product) => {
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
      </Box>

      <Box mx={5} mt={2}>
        <Typography>Opções</Typography>
        <Typography variant="subtitle2">
          Escolha dentre as opções de massas abaixo.
        </Typography>
      </Box>

      <Box mx={5} mt={2}>
        <List>
          {options.map((option) => {
            const labelId = `checkbox-list-label-${option}`;

            return (
              <ListItem
                key={option}
                role={undefined}
                dense
                button
                onClick={handleToggle(option)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(option) !== -1}
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
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Observações"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Box>

      <Box mx={5} mt={2}>
        <Typography>Quantity</Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button className={classes.root}>
            Adicionar {productDetail.price}
          </Button>
        </Box>
        ;
      </Box>
    </>
  );
}
