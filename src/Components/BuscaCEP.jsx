import React from "react";
import { useState } from "react";

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
  console.log(DATA);

  const handleChange = ({ target }) => {
    setCEP(target.value);
  };

  return (
    <div className="BuscaCep">
      <div className="main">
        <h1>Informe o CEP</h1>

        <div className="main-top">
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
        <label>Localidade: </label>
        <input
          type="text"
          value={DATA ? DATA.logradouro : ""}
          disabled={true}
        />
        <label>Bairro: </label>
        <input type="text" value={DATA ? DATA.bairro : ""} disabled={true} />
        <label>cidade: </label>
        <input
          type="text"
          value={DATA ? DATA.localidade : ""}
          disabled={true}
        />
        <label>UF: </label>
        <input type="text" value={DATA ? DATA.uf : ""} disabled={true} />
      </div>
    </div>
  );
}
