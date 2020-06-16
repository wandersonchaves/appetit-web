import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

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
          <h1>Novo pedido</h1>

          <p>Produtos</p>

          <ul>
            <li>Avatar</li>
            <li>
              <strong>2x Cuscuz Completo</strong>
            </li>
            <li>Observações</li>
          </ul>

          <strong>Total</strong>
          <p>R$ Preço</p>
        </section>

        <section className="content-aux">
          <h1>Informações para o pedido</h1>
          <p>Preencha as informações abaixo para concluir esta venda.</p>

          <p>Passo 2 de 3</p>
          <p>Barra de Progresso</p>

          <strong>Para quem você está vendendo?</strong>
          <div>
            <InputGroup className="mb-auto">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Procure o cliente aqui..."
              />
            </InputGroup>
            <br />
          </div>

          <ul>
            <li>Avatar</li>
            <strong>Nome do Cliente</strong>
          </ul>
          <ul>
            <li>Avatar</li>
            <strong>Nome do Cliente</strong>
          </ul>
          <ul>
            <li>Avatar</li>
            <strong>Nome do Cliente</strong>
          </ul>
          <ul>
            <li>Avatar</li>
            <strong>Nome do Cliente</strong>
          </ul>
          <ul>
            <li>Avatar</li>
            <strong>Nome do Cliente</strong>
          </ul>
        </section>
      </div>
    </div>
  );
}
