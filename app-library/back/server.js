const dotenv = require('dotenv').load();
const	express = require('express');
const	app = express();
const cors = require('cors');
const	logger = require('morgan');
const	bodyParser = require('body-parser');
const	mongoose = require('mongoose');
const	MONGODB_URI = process.env.DB_URI;
const	PORT = process.env.PORT;
const	usersRoutes = require('./routes/users.js');

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Conexión establecida con la base de datos.`)
})

app.use(cors());
app.use(express.static(`${__dirname}/site/`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/site/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Servidor escuchando en http://localhost:${PORT}`)
});
