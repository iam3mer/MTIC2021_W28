import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const SALUDO = <h1>Hola Tripulantes!</h1>;

const tripulante = {
  nombre: "Juan",
  apellido: "Medina"
}

const formatearTripulante = (data) => {
  return data.nombre + ' ' + data.apellido; 
}

const elem = (
  <h1>
    Hola {formatearTripulante(tripulante)}!
  </h1>
)

class Ejemplo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acumulador: 0
    };
  }

  acumular() {
    this.setState(state => ({
      acumulador: state.acumulador + 2
    }));
  }

  componentDidMount() {
    setInterval(() => this.acumular(), 1000);
  }

  render() {
    return (
      <div>
        {this.props.etiqueta}{this.state.acumulador}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {elem}
    <Ejemplo etiqueta="Acumulador: "/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
