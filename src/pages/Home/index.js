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

import Layout from "../../components/Layout";

const NovoPedidoButton = withStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
}))(Button);

export default function Home() {
  const history = useHistory();

  const listClients = [
    {
      id: 1,
      name: "Justine Marshall",
      avatar: "avatar1",
    },
    {
      id: 2,
      name: "Bairam Frootan",
      avatar: "avatar2",
    },
    {
      id: 3,
      name: "Tua Manuera",
      avatar: "avatar3",
    },
    {
      id: 4,
      name: "Justine Marshall",
      avatar: "avatar4",
    },
    {
      id: 5,
      name: "Bairam Frootan",
      avatar: "avatar5",
    },
  ];

  return (
    <Layout>
      <Box mx={5}>
        <Box>
          <Typography component="h1" variant="h5">
            Olá, Vanusa!
          </Typography>
        </Box>
        <Divider variant="inset" component="li" />

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
        <Box>
          <TextField
            startIcon={<SearchIcon color="primary" />}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Procure o pedido aqui..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box>
          <List
            dense
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <p>
                  <strong>13/05/2019</strong>, Você vendeu{" "}
                  <strong>R$ 25.50</strong>
                </p>
              </ListSubheader>
            }
          >
            {listClients.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;

              return (
                <ListItem
                  color="#000"
                  key={value}
                  button
                  onClick={() => history.push("/orders/:order")}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={`Marcel Batista`}
                    secondary="Cuscuz com calabresa, suco de laranja."
                  />
                  <ListItemSecondaryAction>
                    <Typography>R$ 3.50</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Layout>
  );
}

/*
import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople, MdPerson, MdAdd } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Order() {
  return (
    <div className="container">
      <div className="row">
        <div className="col modal-dialog-centered text-center justify-content-center">
          <nav>
            <Link to="/">
              <img src={logoImg} alt="Logo Appetit" />
            </Link>

            <ul>
              <li>
                <Link to="/home">
                  <MdList size={25} />
                  PEDIDOS
                </Link>
              </li>
              <ul>
                <li>
                  <Link to="/order/open">EM ABERTOS</Link>
                </li>
                <li>
                  <Link to="/order/closed">ENCERRADOS</Link>
                </li>
              </ul>
              <li>
                <Link to="/clients">
                  <MdPeople size={20} />
                  CLIENTES
                </Link>
              </li>
            </ul>

            <p className="copy">Infoway Gestão em Saúde &copy;, 2019.</p>
          </nav>
        </div>

        <div className="col">
          <section className="content">
            <h1>Olá, Teste!</h1>

            <Link to="/home">
              <div>
                <input className="form-control" type="text" />
                <MdAdd />
                FAZER NOVO PEDIDO
              </div>
              <br />
            </Link>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Procure o pedido aqui..."
            />

            <ul>
              <li>
                <div>
                  <strong>Data</strong>
                  <p>Você vendeu</p>
                  <strong>R$ 10.00</strong>
                </div>
              </li>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
*/
