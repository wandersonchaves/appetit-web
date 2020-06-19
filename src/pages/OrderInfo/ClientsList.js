import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { OrderContext, AppContext } from "../../context";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  withStyles,
  Divider,
  useTheme,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
  },
}));

const CustomListItem = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}))(ListItem);

const NextButton = withStyles((theme) => ({
  root: {
    borderRadius: 5,
  },
}))(Button);

export default function ClientsList() {
  const classes = useStyles();
  const theme = useTheme();

  const {
    state: { clients },
  } = React.useContext(AppContext);
  const { state: order, dispatch } = React.useContext(OrderContext);
  const [selectedClients, setSelectedClients] = React.useState(order.clients);

  const toggleClient = (id) => (event) => {
    if (selectedClients[id]) {
      const { [id]: _deleteId, ...otherIds } = selectedClients;
      setSelectedClients(otherIds);
    } else {
      setSelectedClients({ ...selectedClients, [id]: id });
    }
  };

  const getTotalSelectedClients = () => Object.keys(selectedClients).length;

  return (
    <>
      <Box mx={5} mt={3}>
        <Typography variant="subtitle1">Para quem está vendendo?</Typography>
      </Box>
      <Box mx={5} mt={2}>
        <TextField
          id="search-order"
          placeholder="Procure o cliente aqui..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box mx={5} mt={2}>
        <List>
          {clients.map((client) => (
            <>
              <CustomListItem
                key={client.id}
                button
                onClick={toggleClient(client.id)}
              >
                <ListItemAvatar>
                  {selectedClients[client.id] ? (
                    <Avatar className={classes.avatar}>
                      <CheckCircleOutlinedIcon />
                    </Avatar>
                  ) : (
                    <Avatar alt={client.name} src={client.avatar} />
                  )}
                </ListItemAvatar>
                <ListItemText primary={client.name} />
              </CustomListItem>
              <Divider light />
            </>
          ))}
        </List>
      </Box>
      {getTotalSelectedClients() > 0 && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor={theme.palette.primary.main}
        >
          <Box mx={3} my={2} color="#fff">
            <b>{getTotalSelectedClients()} clientes selecionados</b>
          </Box>
          <Box m={2}>
            <NextButton
              style={{ color: "#fff" }}
              endIcon={<ChevronRightOutlinedIcon />}
              onClick={() => dispatch({ type: "next_step" })}
            >
              Avançar
            </NextButton>
          </Box>
        </Box>
      )}
    </>
  );
}
