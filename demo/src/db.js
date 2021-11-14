const mongoose = require('mongoose');

const URI_DB = 'mongodb+srv://jhsw2s:1234567890@cluster0.mey1q.mongodb.net/db_demoW28?retryWrites=true&w=majority';

mongoose
  .connect(
    URI_DB,
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(db => console.log("Conexión con db establecida!"))
  .catch(err => console.log(err));

module.exports = mongoose;
