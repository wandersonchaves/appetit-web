import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import feedback from "../../assets/feedback.svg";

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
          <section>
            <img src={feedback} alt="Feedback" />

            <p>Pedido feito com sucesso!</p>

            <button type="button" className="btn btn-outline-dark">
              VOLTAR PARA A LISTA DE PEDIDOS
            </button>
            <button type="button" className="btn btn-outline-primary">
              FAZER NOVO PEDIDO
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
