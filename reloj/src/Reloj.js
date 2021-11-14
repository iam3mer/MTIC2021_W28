import React from 'react';

// V1
// function reloj(props) {
//   const hora = (
//     <div>
//       <h1>
//         Son las {new Date().toLocaleTimeString()}
//       </h1>
//     </div>
//   );
//   ReactDOM.render(hora, document.getElementById('root'));
// };

// setInterval(reloj, 1000);

// V2
// function Reloj(props) {
//   return (
//     <div>
//       <h1>
//         Son las {props.fecha.toLocaleTimeString()}
//       </h1>
//     </div>
//   );
// };

// function temporizador() {
//   ReactDOM.render(<Reloj fecha={new Date()} />, document.getElementById('root'));
// };

// setInterval(temporizador, 1000);

// V3
class Reloj extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fecha: new Date()
    };
  }

  // Este metodo de estado se ejecutará despues de la renderización inicial del componente
  componentDidMount() {
    this.timerID = setInterval(() => this.temporizador(), 1000)
  }

  // Este metodo de estado se ejecutará antes de desmontar y destruir el componente
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Este metodo actualiza el estado de fecha por la fecha actual
  temporizador() {
    this.setState({
      fecha: new Date()
    });
  }

  render() {
    return (
      <div>
          <Fecha fecha={this.state.fecha}/>
          Son las {this.state.fecha.toLocaleTimeString()}
      </div>
    );
  }
};

function Fecha (props) {
    return (
      <h1>
      {props.fecha.toLocaleDateString()}
    </h1>
    )
}

export default Reloj;
