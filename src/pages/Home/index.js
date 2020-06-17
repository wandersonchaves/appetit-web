import React from "react";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

/*
import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople, MdPerson, MdAdd } from "react-icons/md";

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
            <h1>Olá, Teste!</h1>

            <Link to="/home">
              <div>
                <input className="form-control" type="text" />
                <MdAdd />
                FAZER NOVO PEDIDO
              </div>
              <br />
            </Link>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Procure o pedido aqui..."
            />

            <ul>
              <li>
                <div>
                  <strong>Data</strong>
                  <p>Você vendeu</p>
                  <strong>R$ 10.00</strong>
                </div>
              </li>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
              <Link to="/order/:order">
                <li>
                  <button>
                    <MdPerson size={18} />
                  </button>
                  <strong>Nome do Cliente</strong>
                  <p className="ml-5">Pedido do Cliente</p>
                  <p className="float-right">Valor do Pedido</p>
                </li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
*/
