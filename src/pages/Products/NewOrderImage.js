import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import imgProducts from "../../assets/img-products.svg";

const useStyles = makeStyles((theme) => ({
  areaImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 120,
  },
}));

export default function NewOrderImage() {
  const classes = useStyles();

  return (
    <Box className={classes.areaImg}>
      <img alt="Img Produtos" src={imgProducts} />
      <Typography component="h3" variant="subtitle1" align="center">
        Acompanhe aqui um resumo desta venda
      </Typography>
    </Box>
  );
}
