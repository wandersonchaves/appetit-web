import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({
  listItem: {
    background: "#FFFFFF",
  },
}));

export default function Order() {
  const history = useHistory();
  const classes = useStyles();

  const listProducts = [
    {
      id: 1,
      name: "2x Bolo frito + Café c/ leite",
      avatar: "avatar1",
    },
  ];

  return (
    <Layout>
      <Box mx={5}>
        <Box>
          <ArrowBackIosIcon onClick={() => history.push("/home")} />
          <Typography component="h1" variant="h6">
            Pedidos de Luiz
          </Typography>
        </Box>
        <Box>
          <List
            dense
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <p>
                  <strong>13/05/2019</strong>
                </p>
              </ListSubheader>
            }
          >
            {listProducts.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;

              return (
                <Box boxShadow={1} mb={1}>
                  <ListItem
                    className={classes.listItem}
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
                      primary={`2x Bolo frito + Café c/ leite`}
                      secondary="R$ 4.25"
                    />
                  </ListItem>
                </Box>
              );
            })}
          </List>
        </Box>
        <Box></Box>
      </Box>
    </Layout>
  );
}

/*
import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Show() {
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
            <h1>Pedidos do Cliente</h1>
            <ul>
              <li>Data</li>
              <ul>
                <li>Avatar</li>
                <li>Pedido</li>
                <li>Preço</li>
              </ul>
            </ul>
            <ul>
              <li>Data</li>
              <ul>
                <li>Avatar</li>
                <li>Pedido</li>
                <li>Preço</li>
              </ul>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
*/
