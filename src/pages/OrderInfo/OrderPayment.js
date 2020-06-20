import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Button,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { OrderContext, AppContext } from "../../context";
import { useHistory } from "react-router-dom";

// TODO mover funcao para modulo utils.js
// see https://gist.github.com/6174/6062387
const makeId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

export default function OrderPayment() {
  const history = useHistory();
  const { state: order, dispatch: orderDispatch } = React.useContext(
    OrderContext
  );
  const { dispatch: appDispatch } = React.useContext(AppContext);
  const [status, setStatus] = React.useState(order.status);
  const [date, setDate] = React.useState(order.date);

  const handleSaveOrder = () => {
    const id = makeId();
    const finishedOrder = { ...order, status, date, id };
    orderDispatch({ type: "finish_order", status, date, id });
    appDispatch({ type: "add_order", order: finishedOrder });
    history.push("/feedback");
  };

  return (
    <>
      <Box mx={5} mt={2}>
        <Typography variant="subtitle1">Qual o status do pagamento?</Typography>
      </Box>
      <Box mx={5}>
        <List>
          <ListItem dense button onClick={() => setStatus("unpaid")}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={status === "unpaid"}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary="Não está pago" />
          </ListItem>
          <ListItem dense button onClick={() => setStatus("paid")}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={status === "paid"}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary="Já está pago" />
          </ListItem>
        </List>
      </Box>
      <Box mx={5}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            fullWidth
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Box>
      <Box mx={5} my={4} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: 150 }}
          onClick={handleSaveOrder}
        >
          Salvar
        </Button>
      </Box>
    </>
  );
}
