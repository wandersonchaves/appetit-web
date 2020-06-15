import React from "react";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Show() {
  return (
    <div className="show-container">
      <div className="content">
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

        <section className="contents">
          <h1>Pedidos do Cliente</h1>
          <ul>
            <li>Data</li>
            <ul>
              <li>Avatar</li>
              <li>Pedido</li>
              <li>Preço</li>
            </ul>
          </ul>
          <ul>
            <li>Data</li>
            <ul>
              <li>Avatar</li>
              <li>Pedido</li>
              <li>Preço</li>
            </ul>
          </ul>
        </section>
      </div>
    </div>
  );
}
