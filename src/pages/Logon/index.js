import React from "react";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo Appetit" />

        <form>
          <h1>Seja bem-vindo!</h1>
          <h3>
            Nós sabemos a importância de estar sempre de barriga cheia e o
            quanto isso pode ajudar no seu dia.
          </h3>

          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />

          <a href="/register">RECUPERAR MINHA SENHA</a>

          <button className="button" type="submit">
            Entrar
          </button>

          <p>Infoway Gestão em Saúde &copy;, 2019.</p>
        </form>
      </section>
    </div>
  );
}
