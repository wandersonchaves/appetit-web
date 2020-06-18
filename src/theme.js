import { orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    background: {
      default: "#FAFAFA",
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
    MuiListItem: {
      root: {
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: "#FFF",
        boxShadow: defaultTheme.shadows[2],
        borderRadius: 5,
      },
    },
  },
});

export default theme;
