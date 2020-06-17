import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col modal-dialog-centered text-center justify-content-center">
          <div className="content">
            <section>
              <Link to="/">
                <img src={logoImg} alt="Logo Appetit" />
              </Link>
              <h1>Cadastro</h1>
              <p>
                Faça seu cadastro, entre na plataforma e faça já seu pedido.
              </p>

              <Link className="text-dark" to="/">
                VOLTAR PARA O LOGON
              </Link>
            </section>

            <form>
              <div className="mt-5">
                <InputGroup>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Nome"
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Email"
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Whatsapp"
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Senha"
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Confirmar Senha"
                  />
                </InputGroup>
                <br />
              </div>
              <Link to="/" className="btn btn-outline-primary">
                Cadastrar
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
