import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";

export default function Show() {
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
    </div>
  );
}
