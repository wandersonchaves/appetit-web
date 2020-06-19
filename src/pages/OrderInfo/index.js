import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
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
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import PageTitle from "../../components/PageTItle";
import avatar1 from "../../assets/avatarProducts/avatar1.png";
import { AppContext, OrderContext } from "../../context";
import ProductsList from "./ProductsList";
import ClientsList from "./ClientsList";

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

// TODO criar arquivo OrderInfo/index.js
export default function OrderInfo() {
  const theme = useTheme();
  const history = useHistory();
  const { state: order } = React.useContext(OrderContext);

  const progress = Math.ceil(order.step * 33.3);

  return (
    <>
      <PageTitle mx={5} title="Informações para o pedido" />
      <Box mx={5} mt={2}>
        <Typography component="h2" variant="subtitle1">
          Preencha as informações abaixo para concluir esta venda.
        </Typography>
      </Box>
      <Box mx={5} mt={2}>
        <Typography variant="subtitle1">Passo {order.step} de 3</Typography>
        <BorderLinearProgress variant="determinate" value={progress} />
      </Box>
      {order.step === 1 && <ProductsList />}
      {order.step === 2 && <ClientsList />}
    </>
  );
}
