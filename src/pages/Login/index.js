import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isValid = () => {
    return email.trim().length > 0 && password.trim().length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid()) {
      history.push("/home");
    }
  };

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
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box mt={2} width="100%">
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <Box mt={4}>
              <Button href="#" fullWidth>
                RECUPERAR MINHA SENHA
              </Button>
            </Box>
            <Box my={4} display="flex" justifyContent="center">
              <MyBuytton
                variant="contained"
                color="primary"
                disableElevation
                disabled={!isValid()}
                type="submit"
              >
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
