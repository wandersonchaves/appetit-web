import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  return (
    <div className="logon-container col-md-5 text-center">
      <section className="form">
        <img className="mt-5" src={logoImg} alt="Logo Appetit" />

        <form>
          <h1 className="mt-3">Seja bem-vindo!</h1>
          <p className="text-secondary">
            Nós sabemos a importância de estar sempre de barriga cheia e o
            quanto isso pode ajudar no seu dia.
          </p>

          <div className="mt-5">
            <InputGroup className="mb-auto">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Email"
              />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Senha"
              />
            </InputGroup>
            <br />
          </div>

          <Link className="text-dark " to="/register">
            NÃO TENHO CADASTRO
          </Link>
          <br />

          <Link className="button" to="/order">
            Entrar
          </Link>

          <p className="mt-5 text-black-50">
            Infoway Gestão em Saúde &copy;, 2019.
          </p>
        </form>
      </section>
    </div>
  );
}
