import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cartasSalvas: [],
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
      this.setState(
        {
          [name]: value,
          cardTrunfo: false,
        },
        this.validacaoDoBotao,
      );
    }
  };

  superTrunfo = () => {
    const { cartasSalvas } = this.state;
    this.setState({
      hasTrunfo: cartasSalvas.some((sp) => sp.cardTrunfo === true),
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    const inf = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((estA) => ({
      cartasSalvas: [...estA.cartasSalvas, inf] }));

    this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      },
      this.superTrunfo,
    );
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
      hasTrunfo,
      cartasSalvas,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <section>
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
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </section>
        <section>
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
        </section>
        <ol>
          {cartasSalvas.map((card, i) => (
            <li key={ i }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
