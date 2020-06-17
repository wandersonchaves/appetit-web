import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col modal-dialog-centered text-center justify-content-center">
          <nav>
            <Link to="/">
              <img src={logoImg} alt="Logo Appetit" />
            </Link>

            <ul>
              <li>
                <Link to="/order">
                  <MdList size={25} />
                  PEDIDOS
                </Link>
              </li>
              <ul>
                <li>
                  <Link to="/order/abertos">EM ABERTOS</Link>
                </li>
                <li>
                  <Link to="/order/encerrados">ENCERRADOS</Link>
                </li>
              </ul>
              <li>
                <Link to="/clientes">
                  <MdPeople size={20} />
                  CLIENTES
                </Link>
              </li>
            </ul>

            <p className="copy">Infoway Gestão em Saúde &copy;, 2019.</p>
          </nav>
        </div>

        <div className="col modal-dialog-centered text-center justify-content-center">
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
        </div>

        <div className="col modal-dialog-centered text-center justify-content-center">
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

            <button className="button">Finalizar</button>
          </section>
        </div>
      </div>
    </div>
  );
}
