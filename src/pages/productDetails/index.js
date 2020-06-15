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
          <h1>Detalhes do pedido</h1>
          <p>
            Aproveite para adicionar alguma observação para este pedido, caso
            queira.
          </p>

          <ul>
            <li>Avatar</li>
            <strong>Cuscuz completo</strong>
            <p>Preço</p>
          </ul>

          <strong>Opções</strong>
          <p>Escolha as opções de massas abaixo.</p>

          <input type="checkbox" name="milho" />
          <label>Milho</label>
          <input type="checkbox" name="milho" />
          <label>Arroz</label>
          <strong>Observações</strong>
          <p>Observações</p>
        </section>
      </div>
    </div>
  );
}
