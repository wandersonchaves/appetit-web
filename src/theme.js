import { orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
      },
      containedPrimary: {
        color: "#fff",
      },
    },
  },
});

export default theme;
