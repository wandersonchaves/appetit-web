import React from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, FormControl } from "react-bootstrap";
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

          <div>
            <InputGroup className="mb-3">
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

          <Link className="back-link" to="/register">
            NÃO TENHO CADASTRO
          </Link>

          <Button variant="primary">Entrar</Button>

          <p>Infoway Gestão em Saúde &copy;, 2019.</p>
        </form>
      </section>
    </div>
  );
}
