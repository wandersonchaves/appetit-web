import React from "react";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Order() {
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
          <section>
            <h1>Olá, Teste!</h1>

            <input
              className="form-control"
              type="text"
              placeholder="FAZER NOVO PEDIDO"
            />
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Procure o pedido aqui..."
            />

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
      </div>
    </div>
  );
}
