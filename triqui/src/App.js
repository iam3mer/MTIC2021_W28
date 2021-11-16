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
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     casillas: Array(9).fill(null),
  //     esX: true,
  //   }
  // }

  renderizarCasilla(i) {
    return <Casilla value={this.props.casillas[i]} onClick={() => this.props.onClick(i)}/>
  }

  render() {
    // const ganador = calculaGanador(this.state.casillas);
    // const estado = `Jugador: ${this.state.esX ? 'X' : 'O'}`;
    // let estado;
    // if (ganador) {
    //   estado = `${ganador} gano!`;
    // } else {
    //   estado = `Jugador: ${this.state.esX ? 'X' : 'O'}`;
    // }
     return (
      <div>
        {/* <div className="estado">
          {estado}
        </div> */}

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

  constructor(props) {
    super(props);
    this.state = {
      historico: [{
        casillas: Array(9).fill(null),
      }],
      esX: true,
      numPaso: 0
    }
  }

  handleClick(i) {
    const historico = this.state.historico.slice(0, this.state.numPaso + 1);
    const actual = historico[historico.length - 1];
    const casillas = actual.casillas.slice();
    if (calculaGanador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.esX ? 'X' : 'O';
    this.setState({historico: historico.concat([{casillas: casillas}]), esX: !this.state.esX, numPaso: historico.length});
  }

  saltarA(paso) {
    this.setState({
      numPaso: paso,
      esX: (paso%2) === 0
    })
  }

  render() {
    const historico = this.state.historico;
    const actual = historico[this.state.numPaso];
    const ganador = calculaGanador(actual.casillas);

    const movimientos = historico.map((paso, movimiento) => {
      const aux = movimiento ?
        `Volver al movimiento: ${movimiento}` :
        'Inicio';
      return (
        <li key={ movimiento }>
          <button onClick={() => this.saltarA(movimiento)}>
            {aux}
          </button>
        </li>
      )
    })

    let estado;
    if (ganador) {
      estado = `${ganador} gano!`;
    } else {
      estado = `Jugador: ${this.state.esX ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Tablero casillas={actual.casillas} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{ estado }</div>
          <ol>{ movimientos }</ol>
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
