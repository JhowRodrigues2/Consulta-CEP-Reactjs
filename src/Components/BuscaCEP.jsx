import React from "react";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer.jsx";

export default function BuscaCep() {
  const [CEP, setCEP] = useState("");
  const [DATA, setDATA] = useState([false]);
  const [error, setError] = useState(null);

  const searchAddress = async () => {
    let url = `https://viacep.com.br/ws/${CEP}/json/`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDATA(data);
        setError(null);
      })
      .catch(() => {
        setError("CEP Inválido!");
        setDATA("");
      });
  };

  const handleChange = ({ target }) => {
    setCEP(target.value);
  };

  return (
    <div className="BuscaCep">
      <div className="main">
        <h1>Informe o CEP</h1>

        <div className="inputArea">
          <input
            type="text"
            name="cepCidade"
            placeholder="00000-000"
            onChange={handleChange}
            maxLength={9}
          />
          <button onClick={searchAddress}>Buscar</button>
        </div>
        <p className="error">{error}</p>

        <div className="form">
          <Form local={"Localidade:"} value={DATA ? DATA.logradouro : ""} />
          <Form local={"Bairro:"} value={DATA ? DATA.bairro : ""} />
          <Form local={"Cidade:"} value={DATA ? DATA.localidade : ""} />
          <Form local={"UF:"} value={DATA ? DATA.uf : ""} />
        </div>
      </div>
      <div>
        <img src="./src/IMG/img.png" alt="logo" />
      </div>
    </div>
  );
}
