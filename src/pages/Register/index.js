import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Appetit" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e faça já seu pedido.</p>

          <Link className="back-link" to="/">
            VOLTAR PARA O LOGON
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Whatsapp" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
