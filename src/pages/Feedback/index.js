import React from "react";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import imgFeedback from "../../assets/feedback.svg";
import Layout from "../../components/Layout";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
  },
  text: {
    padding: theme.spacing(5, 0),
  },
  btns: {
    "& a": {
      margin: theme.spacing(0, 2),
      width: 300,
    },
  },
}));

export default function FeedbackPage() {
  const classes = useStyle();

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <img alt="Img Feedback" src={imgFeedback} />
        <Typography variant="h5" component="h1" className={classes.text}>
          Pedido feito com sucesso!
        </Typography>
        <Box display="flex" justifyContent="center" className={classes.btns}>
          <Button variant="outlined" component={RouterLink} to="/home">
            Voltar para List de Pedidos
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/products"
          >
            Fazer Novo Pedido
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}

/*
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import feedback from "../../assets/feedback.svg";

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
            <img src={feedback} alt="Feedback" />

            <p>Pedido feito com sucesso!</p>

            <button type="button" className="btn btn-outline-dark">
              VOLTAR PARA A LISTA DE PEDIDOS
            </button>
            <button type="button" className="btn btn-outline-primary">
              FAZER NOVO PEDIDO
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
*/
