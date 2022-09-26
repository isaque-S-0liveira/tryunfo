import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="Nome-Da-Carta">
          Nome
          <br />
          <input
            data-testid="name-input"
            type="text"
            id="Nome-Da-Carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="descrição">
          Descrição
          <br />
          <textarea
            data-testid="description-input"
            id="descrição"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo-life">
          Vida
          <input
            data-testid="attr1-input"
            type="number"
            id="atributo-life"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo-strength">
          Força
          <input
            data-testid="attr2-input"
            type="number"
            id="atributo-strength"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo-defense">
          Defesa
          <input
            data-testid="attr3-input"
            type="number"
            id="atributo-defense"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Adicione a URL de uma imagem
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <button type="button">image</button>
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="super-trunfo">
          Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="super-trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
