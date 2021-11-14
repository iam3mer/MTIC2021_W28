import React from 'react';

export class ValidarSesion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.handleLoginClick
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ButtonLogout onClick={this.handleLogoutClick}/>;
    } else {
      button = <ButtonLogin onClick={this.handleLoginClick}/>;
    }
    
    return (
      <>
        <Validar isLoggedIn={isLoggedIn}/>
        {button}
      </>
    )
  }
}

function ButtonLogin(props) {
  return (
    <button onClick={props.onClick}>
      Iniciar Sesion
    </button>
  )
}

function ButtonLogout(props) {
  return (
    <button onClick={props.onClick}>
      Cerrar Sesion
    </button>
  )
}

function Validar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h2>Bienvenido a la clase!!!</h2>
  }
  return <h2>Esperamos verte pronto!!!</h2>
}

export default ValidarSesion;
