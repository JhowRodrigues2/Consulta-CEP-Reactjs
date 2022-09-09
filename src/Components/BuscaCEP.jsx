import React from "react";
import { useState } from "react";

export default function BuscaCep() {
  const [CEP, setCEP] = useState("");
  const [DATA, setDATA] = useState([]);

  const searchAddress = () => {
    let url = `https://viacep.com.br/ws/${CEP}/json/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDATA(data);
      })
      .catch(() => {
        alert("Dados Inválido! ");
        setDATA("");
      });
  };

  return (
    <div className="BuscaCep">
      <div className="main">
        <h1>Informe o CEP:</h1>

        <div className="main-top">
          <input
            type="text"
            name="cepCidade"
            placeholder="Digite o CEP"
            onChange={(e) => setCEP(e.target.value)}
          />
          <button onClick={searchAddress}>Buscar</button>
        </div>

        <label>Localidade: </label>
        <input type="text" value={DATA.logradouro} disabled={true} />
        <label>Bairro: </label>
        <input type="text" value={DATA.bairro} disabled={true} />
        <label>cidade: </label>
        <input type="text" value={DATA.localidade} disabled={true} />
        <label>UF: </label>
        <input type="text" value={DATA.uf} disabled={true} />
      </div>
    </div>
  );
}
