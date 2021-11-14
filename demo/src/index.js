const express = require('express');
const morgan = require('morgan');
const path = require('path')
const {mongoose} = require('./db')

const app = express();

// Configuración
app.set('port', process.env.PORT || 2022);
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api', require('./rutas/rutas'))

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});
