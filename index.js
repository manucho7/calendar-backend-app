const express = require('express');
require('dotenv').config();

//crear el servidor de express

const app = express();

//escuchar peticiones

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});

//Directorio Publico middleware para configurar acceso a carpeta publica
app.use( express.static('public') );


// Lectura y parseo del body
app.use( express.json() );

//rutas

app.use( '/api/auth', require('./routes/auth') );