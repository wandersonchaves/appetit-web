import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Logo from "./Logo";
import loggedUser from "../assets/logged-user.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  container: {
    minHeight: "100vh",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
  },
  listItem: {
    display: "flex",
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: "rgba(255, 255, 255, 0.54)",
  },
  listItemSelected: {
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
  },
  listItemText: {
    paddingLeft: theme.spacing(3), // 24px
  },
  subItem: {
    paddingLeft: theme.spacing(3),
    marginLeft: theme.spacing(3), // 24px
  },
  subItemSelected: {
    borderLeft: "2px solid #fff",
    color: "#FFF",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item sm={3} className={classes.menu}>
          <Box py={7} display="flex" justifyContent="center">
            <Logo />
          </Box>
          <Box className={clsx(classes.listItem, classes.listItemSelected)}>
            <ListAltRoundedIcon />
            <Typography variant="subtitle1" className={classes.listItemText}>
              PEDIDOS
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography
              variant="subtitle1"
              className={clsx(classes.subItem, classes.subItemSelected)}
            >
              EM ABERTO
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography variant="subtitle1" className={clsx(classes.subItem)}>
              ENCERRADOS
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <PersonOutlineIcon />
            <Typography variant="subtitle1" className={classes.listItemText}>
              CLIENTES
            </Typography>
          </Box>
          <Box mt={20} mb={5}>
            <Typography align="center" color="textSecondary">
              Infoway Gestão em Saúde ©, {new Date().getFullYear()}.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={9}>
          <Box
            height={60}
            display="flex"
            justifyContent="flex-end"
            pt={2}
            pr={5}
          >
            <Avatar alt="Logged user" src={loggedUser} />
          </Box>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
