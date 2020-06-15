import React from "react";

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

          <p>Clientes</p>

          <ul>
            <li>
              <p>Avatar</p>
              <strong>Nome do Cliente</strong>
            </li>
            <li>
              <p>Avatar</p>
              <strong>Nome do Cliente</strong>
            </li>
            <li>
              <p>Avatar</p>
              <strong>Nome do Cliente</strong>
            </li>
          </ul>

          <strong>Total</strong>
          <p>R$ Preço</p>
        </section>

        <section className="content-aux">
          <h1>Informações para o pedido</h1>
          <p>Preencha as informações abaixo para concluir esta venda.</p>

          <p>Passo 3 de 3</p>
          <p>Barra de Progresso</p>

          <strong>Qual o status do pagamento?</strong>
          <br />

          <input type="checkbox" />
          <label>Não está pago</label>
          <br />
          <input type="checkbox" />
          <label>Já está pago</label>
          <br />

          <strong>Em qual data foi realizado?</strong>
          <input type="date" placeholder="Data do pedido" />

          <button>Finalizar</button>
        </section>
      </div>
    </div>
  );
}
