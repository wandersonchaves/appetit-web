import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  title: {
    width: 230,
  },
  titleDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 3,
  },
}));

export default function PageTitle({ to, title, ...rest }) {
  const classes = useStyles();

  return (
    <Box {...rest}>
      {to && (
        <Box>
          <Link to={to}>
            <ArrowBackIosIcon color="primary" />
          </Link>
        </Box>
      )}
      <Box className={classes.title}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Divider className={classes.titleDivider} />
      </Box>
    </Box>
  );
}
