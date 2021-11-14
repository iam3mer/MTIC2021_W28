import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Reloj from './Reloj'
import EjemploEventos from './Eventos'
import ValidarSesion from './ValidarSesion'
import Formulario from './Formulario'
import Funcional from './Funcional'

ReactDOM.render(
  <>
    <Reloj/>
    <hr/>
    <EjemploEventos/>
    <hr/>
    <ValidarSesion/>
    <hr/>
    <Formulario/>
    <hr/>
    <Funcional/>
  </>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
