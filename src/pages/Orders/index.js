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

import Layout from "../../components/Layout";
import cuscuzSimples from "../../assets/avatarProducts/cuscuz-simples.png";
import cuscuzCompleto from "../../assets/avatarProducts/cuscuz-completo.png";

export default function Order() {
  const history = useHistory();

  const productsByDate = [
    {
      date: "13/05/2019",
      product: [
        {
          id: 1,
          quantity: 2,
          name: "x Bolo frito + Café c/ leite",
          avatar: cuscuzSimples,
          price: "R$ 4.25",
        },
      ],
    },
    {
      date: "09/05/2019",
      product: [
        {
          id: 2,
          quantity: 2,
          name: "x Bolo frito + Café c/ leite",
          avatar: cuscuzCompleto,
          price: "R$ 4.25",
        },
      ],
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
          {productsByDate.map((order) => (
            <List
              dense
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <p>
                    <strong>{order.date}</strong>
                  </p>
                </ListSubheader>
              }
            >
              {order.product.map((product) => {
                const labelId = `checkbox-list-secondary-label-${product}`;

                return (
                  <ListItem
                    key={product}
                    button
                    onClick={() => history.push("/orders/:order")}
                  >
                    <ListItemAvatar>
                      <Avatar alt={product.name} src={product.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`${product.quantity}${product.name}`}
                      secondary={product.price}
                    />
                  </ListItem>
                );
              })}
            </List>
          ))}
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
