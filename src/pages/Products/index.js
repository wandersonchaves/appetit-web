import React from "react";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import imgProducts from "../../assets/img-products.svg";

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

          <img src={imgProducts} alt="Img Products" />

          <p>Acompanhe aqui um resumo desta venda.</p>
        </section>

        <section className="content-aux">
          <h1>Informações para o pedido</h1>

          <p>Preencha as informações abaixo para concluir esta venda.</p>

          <p>Passo 1 de 3</p>
          <p>Barra de progresso</p>

          <strong>O que você está vendendo?</strong>

          <input type="text" placeholder="Procute o produto aqui..." />

          <ul>
            <li>Cuscuz</li>
            <ul>
              <li>Avatar</li>
              <li>Cuscuz Simples</li>
              <li>Preço</li>
            </ul>
            <ul>
              <li>Avatar</li>
              <li>Cuscuz Completo</li>
              <li>Preço</li>
            </ul>
          </ul>
          <ul>
            <li>Pães</li>
            <ul>
              <li>Avatar</li>
              <li>Pão Caseiro</li>
              <li>Preço</li>
            </ul>
            <ul>
              <li>Avatar</li>
              <li>Pão caseiro completo</li>
              <li>Preço</li>
            </ul>
          </ul>
        </section>
      </div>
    </div>
  );
}
