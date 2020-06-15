import React from "react";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import feedback from "../../assets/feedback.svg";

export default function Products() {
  return (
    <div className="products-container">
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
          <img src={feedback} alt="Feedback" />

          <p>Pedido feito com sucesso!</p>

          <button>VOLTAR PARA A LISTA DE PEDIDOS</button>
          <button>FAZER NOVO PEDIDO</button>
        </section>
      </div>
    </div>
  );
}
