import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople, MdPerson, MdArrowBack } from "react-icons/md";

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
                <Link to="/home">
                  <MdList size={25} />
                  PEDIDOS
                </Link>
              </li>
              <ul>
                <li>
                  <Link to="/order/open">EM ABERTOS</Link>
                </li>
                <li>
                  <Link to="/order/closed">ENCERRADOS</Link>
                </li>
              </ul>
              <li>
                <Link to="/clients">
                  <MdPeople size={20} />
                  CLIENTES
                </Link>
              </li>
            </ul>

            <p className="copy">Infoway Gestão em Saúde &copy;, 2019.</p>
          </nav>
        </div>

        <div className="col">
          <section className="content">
            <h1>
              <Link to="/products">
                <MdArrowBack />
              </Link>
              <br />
              Novo pedido
              <br />
            </h1>

            <p>Produtos</p>

            <div className="product">
              <img src={<MdList />} />
              <strong>Cuscuz Simples</strong>
              <span>Value</span>
              <p>Observações</p>
            </div>
            <div className="product">
              <img src={<MdList />} />
              <strong>Cuscuz Simples</strong>
              <span>Value</span>
              <p>Observações</p>
            </div>
            <div className="product">
              <img src={<MdList />} />
              <strong>Cuscuz Simples</strong>
              <span>Value</span>
              <p>Observações</p>
            </div>
            <div className="product">
              <img src={<MdList />} />
              <strong>Cuscuz Simples</strong>
              <span>Value</span>
              <p>Observações</p>
            </div>
            <div className="divisor"></div>
            <div className="total">
              <p>
                Total <span>Total</span>
              </p>
            </div>
          </section>
        </div>

        <div className="col">
          <section className="content-aux">
            <h1>Informações para o pedido</h1>
            <p>Preencha as informações abaixo para concluir esta venda.</p>

            <p>Passo 2 de 3</p>
            <p>Barra de Progresso</p>

            <strong>Para quem você está vendendo?</strong>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Procure o cliente aqui..."
              />
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
    </div>
  );
}
