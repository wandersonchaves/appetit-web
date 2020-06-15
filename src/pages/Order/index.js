import React from "react";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

import "../../global.css";
import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Order() {
  return (
    <div className="order-container">
      <section className="nav">
        <img src={logoImg} alt="Logo Appetit" />

        <nav>
          <ul>
            <li>PEDIDOS</li>
            <ul>
              <li>EM ABERTOS</li>
              <li>ENCERRADOS</li>
            </ul>
            <li>CLIENTES</li>
          </ul>
        </nav>

        <p>Infoway Gestão em Saúde &copy;, 2019.</p>
      </section>

      <section className="content">
        <h1>Olá, Teste!</h1>

        <input type="text" placeholder="FAZER NOVO PEDIDO" />
        <input type="text" placeholder="Procure o pedido aqui..." />

        <p>Data, Você vendeu R$ Valor</p>

        <ul>
          <Link to="/order/show">
            <li>
              <button>
                <MdPerson size={18} />
              </button>
              <strong>Nome do Cliente</strong>
              <p>Pedido do Cliente</p>
              <p>Valor do Pedido</p>
            </li>
          </Link>
          <Link to="/order/show">
            <li>
              <button>
                <MdPerson size={18} />
              </button>
              <strong>Nome do Cliente</strong>
              <p>Pedido do Cliente</p>
              <p>Valor do Pedido</p>
            </li>
          </Link>
          <Link to="/order/show">
            <li>
              <button>
                <MdPerson size={18} />
              </button>
              <strong>Nome do Cliente</strong>
              <p>Pedido do Cliente</p>
              <p>Valor do Pedido</p>
            </li>
          </Link>
          <Link to="/order/show">
            <li>
              <button>
                <MdPerson size={18} />
              </button>
              <strong>Nome do Cliente</strong>
              <p>Pedido do Cliente</p>
              <p>Valor do Pedido</p>
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
}
