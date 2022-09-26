import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="Nome-Da-Carta">
          Nome
          <br />
          <input data-testid="name-input" type="text" id="Nome-Da-Carta" />
        </label>
        <br />
        <label htmlFor="descrição">
          Descrição
          <br />
          <textarea data-testid="description-input" id="descrição" />
        </label>
        <br />
        <label htmlFor="atributo-life">
          Vida
          <input data-testid="attr1-input" type="number" id="atributo-life" />
        </label>
        <br />
        <label htmlFor="atributo-strength">
          Força
          <input
            data-testid="attr2-input"
            type="number"
            id="atributo-strength"
          />
        </label>
        <br />
        <label htmlFor="atributo-defense">
          Defesa
          <input
            data-testid="attr3-input"
            type="number"
            id="atributo-defense"
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Adicione a URL de uma imagem
          <input data-testid="image-input" type="text" />
          <button type="button">image</button>
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade
          <select data-testid="rare-input" id="raridade">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="super-trunfo">
          Super Trunfo?
          <input data-testid="trunfo-input" type="checkbox" id="super-trunfo" />
        </label>
        <br />
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
