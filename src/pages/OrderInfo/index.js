import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import PageTitle from "../../components/PageTItle";
import { OrderContext } from "../../context";
import ProductsList from "./ProductsList";
import ClientsList from "./ClientsList";
import OrderPayment from "./OrderPayment";

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
      {order.step === 3 && <OrderPayment />}
    </>
  );
}
