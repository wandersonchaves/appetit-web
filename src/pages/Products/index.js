import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTItle";

const useStyles = makeStyles((theme) => ({
  title: {
    width: 230,
  },
  titleDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 3,
  },
}));

export default function Productos() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container>
        <Grid item sm={6}>
          <PageTitle mx={5} to="/home" title="Novo pedido" />
        </Grid>
        <Grid item sm={6}></Grid>
      </Grid>
    </Layout>
  );
}

/*
import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import imgProducts from "../../assets/img-products.svg";

export default function Products() {
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
            <h1>Novo pedido</h1>

            <img src={imgProducts} alt="Img Products" />

            <p>Acompanhe aqui um resumo desta venda.</p>
          </section>
        </div>

        <div className="col">
          <section className="content-aux">
            <h1>Informações para o pedido</h1>

            <p>Preencha as informações abaixo para concluir esta venda.</p>

            <p>Passo 1 de 3</p>
            <p>Barra de progresso</p>

            <strong>O que você está vendendo?</strong>

            <input type="text" placeholder="Procute o produto aqui..." />

            <ul>
              <li>Cuscuz</li>
              <ul>
                <li>Avatar</li>
                <li>Cuscuz Simples</li>
                <li>Preço</li>
              </ul>
              <ul>
                <li>Avatar</li>
                <li>Cuscuz Completo</li>
                <li>Preço</li>
              </ul>
            </ul>
            <ul>
              <li>Pães</li>
              <ul>
                <li>Avatar</li>
                <li>Pão Caseiro</li>
                <li>Preço</li>
              </ul>
              <ul>
                <li>Avatar</li>
                <li>Pão caseiro completo</li>
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
