import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterIcon from "@material-ui/icons/Tune";

import Layout from "../../components/Layout";
import avatar1 from "../../assets/avatarClients/avatar1.png";
import avatar2 from "../../assets/avatarClients/avatar2.png";
import avatar3 from "../../assets/avatarClients/avatar3.png";
import avatar4 from "../../assets/avatarClients/avatar4.png";
import PageTitle from "../../components/PageTItle";

const NovoPedidoButton = withStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
}))(Button);

export default function Home() {
  const history = useHistory();

  const ordersByDate = [
    {
      date: "13/05/2019",
      total: "R$ 45.80",
      clients: [
        {
          id: "ord5",
          name: "Marcel Batista",
          avatar: avatar1,
        },
        {
          id: "ord4",
          name: "Fernanda Siqueira",
          avatar: avatar2,
        },
        {
          id: "ord3",
          name: "Luiz Oliveira",
          avatar: avatar3,
        },
      ],
    },
    {
      date: "09/05/2019",
      total: "R$ 123.50",
      clients: [
        {
          id: "ord2",
          name: "Ana Virlania",
          avatar: avatar4,
        },
        {
          id: "ord1",
          name: "Marcel Batista",
          avatar: avatar1,
        },
      ],
    },
  ];

  return (
    <Layout>
      <Box mx={5}>
        <PageTitle mx={0} mb={2} title="Olá, Vanusa" />

        <Box>
          <NovoPedidoButton
            startIcon={<AddIcon color="primary" />}
            fullWidth
            variant="contained"
            onClick={() => history.push("/products")}
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
          {ordersByDate.map((order, i) => (
            <List
              dense
              key={i}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <p>
                    <strong>{order.date}</strong>, Você vendeu{" "}
                    <strong>{order.total}</strong>
                  </p>
                </ListSubheader>
              }
            >
              {order.clients.map((client) => {
                const labelId = `checkbox-list-secondary-label-${client.id}`;

                return (
                  <ListItem
                    color="#000"
                    key={client.id}
                    button
                    onClick={() => history.push(`/orders/${client.id}`)}
                  >
                    <ListItemAvatar>
                      <Avatar alt={client.name} src={client.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`${client.name}`}
                      secondary="Cuscuz com calabresa, suco de laranja."
                    />
                    <ListItemSecondaryAction>
                      <Typography>R$ 3.50</Typography>
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
