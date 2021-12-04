# Aplicación React con autentificación JWT

### Para ejecutar debe:

1. `git clone` para clonar el repositorio.

2. ejecutar `npm install` en front y back.

3. Crear un archivo `.env` en la raiz de library, adyacete a `server.js`.
   
   En el archivo `.env`, usted debe establecer las variables de entorno: `JWT_SECRET`, `DB_URI`, y `PORT`. Por ejemplo:

   ```
   JWT_SECRET = "Mi frase secreta"
   DB_URI = "mongodb://user:password@cluster0-shard-00-00.mey1q.mongodb.net:27017,cluster0-shard-00-01.mey1q.mongodb.net:27017,cluster0-shard-00-02.mey1q.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-77yhhp-shard-0&authSource=admin&retryWrites=true&w=majority"
   PORT = 3001
   ```

### Uso

Para identificar al usuario que hace una solicitud se hace uso de 'verifyToken' y se comprueba que el usuario sea valido.

```javascript
const express = require('express')
const commentRouter = new express.Router()

// JWT AUTH MIDDLEWARE:
const { verifyToken }  = require('../serverAuth.js')

const Comment = require('../models/Comment.js')

// Todas las rutas declaradas despues del Middleware necesitan un token
commentRouter.use(verifyToken)
commentRouter.post("/comments", (req, res) => {
  Comment.create({ ...req.body, user: req.user }, (err, comment) => {
    if(err) return console.log(err)
    res.json({ success: true, message: "Comment created.", comment })
  })
})

module.exports = commentRouter
```
