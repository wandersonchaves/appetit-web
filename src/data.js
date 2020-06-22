import cuscuzSimples from "./assets/avatarProducts/cuscuz-simples.png";
import cuscuzCompleto from "./assets/avatarProducts/cuscuz-completo.png";
import paoCaseiro from "./assets/avatarProducts/pao-caseiro.png";
import paoCaseiroCompleto from "./assets/avatarProducts/pao-caseiro-completo.png";
import mistoQuente from "./assets/avatarProducts/misto-quente.png";
import linguaDeSograP from "./assets/avatarProducts/lingua-de-sogra-p.png";
import linguaDeSograG from "./assets/avatarProducts/lingua-de-sogra-g.png";
import pastelzinhoDeCarne from "./assets/avatarProducts/pastelzinho-de-carne.png";
import esfirraDeFrango from "./assets/avatarProducts/esfirra-de-frango.png";
import enroladoDePresunto from "./assets/avatarProducts/enrolado-de-presunto.png";
import sucos from "./assets/avatarProducts/sucos.png";
import vitaminas from "./assets/avatarProducts/vitaminas.png";
import refrigerantes from "./assets/avatarProducts/refrigerantes.png";
import aguaMineral from "./assets/avatarProducts/agua-mineral.png";
import aguaMineralComGas from "./assets/avatarProducts/agua-mineral-com-gas.png";
import nescau from "./assets/avatarProducts/nescau.png";

import anaVirlania from "./assets/avatarClients/ana-virlania.png";
import bairamFrootan from "./assets/avatarClients/bairam-frootan.png";
import fernandaSiqueira from "./assets/avatarClients/fernanda-siqueira.png";
import justineMarshall from "./assets/avatarClients/justine-marshall.png";
import luizOliveira from "./assets/avatarClients/luiz-oliveira.png";
import marcelBatista from "./assets/avatarClients/marcel-batista.png";
import tuaManuera from "./assets/avatarClients/tua-manuera.png";

export default {
  products: [
    {
      id: "p1",
      name: "Cuzcuz simples",
      category: "Cuzcuz",
      price: 2.25,
      options: [
        { id: "p1o1", name: "Milho" },
        { id: "p1o2", name: "Arroz" },
      ],
      avatar: cuscuzSimples,
    },
    {
      id: "p2",
      name: "Cuzcuz completo",
      category: "Cuzcuz",
      price: 3.25,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: cuscuzCompleto,
    },
    {
      id: "p3",
      name: "Pão caseiro",
      category: "Pães",
      price: 2.25,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: paoCaseiro,
    },
    {
      id: "p4",
      name: "Pão caseiro completo",
      category: "Pães",
      price: 2.25,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: paoCaseiroCompleto,
    },
    {
      id: "p5",
      name: "Misto quente",
      category: "Pães",
      price: 3.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: mistoQuente,
    },
    {
      id: "p6",
      name: "Lingua de sogra (pequena)",
      category: "Pães",
      price: 2.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: linguaDeSograP,
    },
    {
      id: "p7",
      name: "Lingua de sogra (grande)",
      category: "Pães",
      price: 3.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: linguaDeSograG,
    },
    {
      id: "p8",
      name: "Pastelzinho de carne",
      category: "Salgados",
      price: 2.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: pastelzinhoDeCarne,
    },
    {
      id: "p9",
      name: "Esfirra de Frango",
      category: "Salgados",
      price: 2.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: esfirraDeFrango,
    },
    {
      id: "p10",
      name: "Enrolado de presunto",
      category: "Salgados",
      price: 2.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: enroladoDePresunto,
    },
    {
      id: "p11",
      name: "Sucos",
      category: "Bebidas",
      price: 3.25,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: sucos,
    },
    {
      id: "p12",
      name: "Vitaminas",
      category: "Bebidas",
      price: 3.5,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: vitaminas,
    },
    {
      id: "p13",
      name: "Refrigerantes",
      category: "Bebidas",
      price: 2.5,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: refrigerantes,
    },
    {
      id: "p14",
      name: "Água mineral (sem gás)",
      category: "Bebidas",
      price: 3.0,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: aguaMineral,
    },
    {
      id: "p15",
      name: "Água mineral (com gás)",
      category: "Bebidas",
      price: 3.5,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: aguaMineralComGas,
    },
    {
      id: "p16",
      name: "Nescau",
      category: "Bebidas",
      price: 2.5,
      options: [
        { id: "p2o1", name: "Milho" },
        { id: "p2o2", name: "Arroz" },
      ],
      avatar: nescau,
    },
  ],
  clients: [
    {
      id: "c1",
      name: "Ana Virlania",
      avatar: anaVirlania,
    },
    {
      id: "c2",
      name: "Bairan Frootan",
      avatar: bairamFrootan,
    },
    {
      id: "c3",
      name: "Fernanda Siqueira",
      avatar: fernandaSiqueira,
    },
    {
      id: "c4",
      name: "Justine Marshall",
      avatar: justineMarshall,
    },
    {
      id: "c5",
      name: "Luiz Oliveira",
      avatar: luizOliveira,
    },
    {
      id: "c6",
      name: "Marcel Batista",
      avatar: marcelBatista,
    },
    {
      id: "c7",
      name: "Tua Manuera",
      avatar: tuaManuera,
    },
  ],
  orders: [],
};
