import React from "react";
import { Link } from "react-router-dom";
import { MdList, MdPeople } from "react-icons/md";

import "./styles.css";
import logoImg from "../../assets/logo-white.svg";
import imgProducts from "../../assets/img-products.svg";

export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col modal-dialog-centered text-center justify-content-center">
          <nav>
            <img src={logoImg} alt="Logo Appetit" />

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

            <img src={imgProducts} alt="Img Products" />

            <p>Acompanhe aqui um resumo desta venda.</p>
          </section>
        </div>
        <div className="col modal-dialog-centered text-center justify-content-center">
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
    </div>
  );
}
