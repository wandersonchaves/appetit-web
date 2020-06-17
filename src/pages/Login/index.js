import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import logoImg from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    justifyContent: "center",
  },
}));

const MyBuytton = withStyles((theme) => ({
  root: {
    width: "70%",
  },
}))(Button);

export default function Login() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Box my={4}>
        <div className={classes.logo}>
          <img src={logoImg} alt="Logo Appetit" />
        </div>
        <Box my={2}>
          <Typography component="h1" variant="h6" align="center">
            Seja bem-vindo!
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Nós sabemos a importância de estar sempre de barriga cheia e o
            quanto isso pode ajudar no seu dia.
          </Typography>
        </Box>
        <div>
          <form noValidate autoComplete="off">
            <Box mt={2} width="100%">
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                name="email"
              />
            </Box>
            <Box mt={2} width="100%">
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Senha"
                variant="outlined"
                name="password"
              />
            </Box>
            <Box mt={4}>
              <Button href="#" fullWidth>
                RECUPERAR MINHA SENHA
              </Button>
            </Box>
            <Box my={4} display="flex" justifyContent="center">
              <MyBuytton variant="contained" color="primary" disableElevation>
                ENTRAR
              </MyBuytton>
            </Box>
            <Box>
              <Typography align="center" color="textSecondary">
                Infoway Gestão em Saúde ©, {new Date().getFullYear()}.
              </Typography>
            </Box>
          </form>
        </div>
      </Box>
    </Container>
  );
}
