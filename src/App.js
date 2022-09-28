import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validacaoDoBotao = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const arrNum = [cardAttr1, cardAttr2, cardAttr3].map(Number);
    const arrText = [cardName, cardDescription, cardImage];
    const nov = 90;
    const duze = 210;
    const noNegative = arrNum.every((atr) => atr >= 0 && atr <= nov);
    const quantidadeEsperada = arrNum.reduce((vlA, curr) => vlA + curr, 0) <= duze;

    const temTexto = arrText.every((text) => text.length >= 1);
    if (temTexto && quantidadeEsperada && noNegative) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = (event) => {
    const { cardTrunfo } = this.state;
    const { name, value, type } = event.target;
    if (type === 'checkbox' && cardTrunfo === false) {
      this.setState({
        cardTrunfo: true,
      });
    } else {
      this.setState({
        [name]: value,
        cardTrunfo: false,
      }, this.validacaoDoBotao);
    }
  };

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
