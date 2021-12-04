import React from 'react';
import './App.css';

function Casilla(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Tablero extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      casillas: Array(9).fill(null),
      esX: true,
    }
  }

  renderizarCasilla(i) {
    return <Casilla value={this.state.casillas[i]} onClick={() => this.handleClick(i)}/>
  }

  handleClick(i) {
    const casillas = this.state.casillas.slice();
    if (calculaGanador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.esX ? 'X' : 'O';
    this.setState({casillas: casillas, esX: !this.state.esX});
  }

  render() {
    const ganador = calculaGanador(this.state.casillas);
    // const estado = `Jugador: ${this.state.esX ? 'X' : 'O'}`;
    let estado;
    if (ganador) {
      estado = `${ganador} gano!`;
    } else {
      estado = `Jugador: ${this.state.esX ? 'X' : 'O'}`;
    }
     return (
      <div>
        <div className="estado">
          {estado}
        </div>

        <div className="board-row">
          {this.renderizarCasilla(0)}
          {this.renderizarCasilla(1)}
          {this.renderizarCasilla(2)}
        </div>

        <div className="board-row">
          {this.renderizarCasilla(3)}
          {this.renderizarCasilla(4)}
          {this.renderizarCasilla(5)}
        </div>

        <div className="board-row">
          {this.renderizarCasilla(6)}
          {this.renderizarCasilla(7)}
          {this.renderizarCasilla(8)}
        </div>
      </div>
     )
  }
}

class Triqui extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Tablero />
        </div>
      </div>
    )
  }
}

function calculaGanador(casillas) {
  const matrizOpciones = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i = 0; i < matrizOpciones.length; i++) {
    const [x, y, z] = matrizOpciones[i];
    if (casillas[x] && casillas[x] === casillas[y] && casillas[x] === casillas[z]) {
      return casillas[x];
    }
  }
  return null;
}

export default Triqui;
