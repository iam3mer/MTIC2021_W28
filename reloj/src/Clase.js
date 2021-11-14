import React from 'react';

class Clase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 5,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
   this.setState(state => ({
     contador: state.contador + 1
   }))
  }

  render() {
    return (
      <>
      <h2>Valor del contador: {this.state.contador}</h2>
      <button onClick={this.handleClick}>
        +
      </button>
    </>
    )
  }
}

export default Clase;
