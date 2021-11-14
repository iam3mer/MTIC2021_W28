import React from 'react';

export class EjemploEventos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToogleOn: true
    };

    this.handleToogleClick = this.handleToogleClick.bind(this);
  }

  // Sin uso de bind
  // handleToogleClick = () => {
  //   this.setState(prevState => ({
  //     isToogleOn: !prevState.isToogleOn
  //   }));
  // }

  handleToogleClick() {
    this.setState(prevState => ({
      isToogleOn: !prevState.isToogleOn
    }));
  }

  render() {
    return (
      <>
      <button onClick={this.handleToogleClick}>
        {this.state.isToogleOn ? isToogleOn() : isToogleOFF()}
      </button>
      </>
    )
  }
}

function isToogleOn(props) {
  return 'ON';
}

function isToogleOFF(props) {
  return 'OFF';
}

export default EjemploEventos;
