const { response } = require('express');
const express = require('express');

//crear el servidor de express

const app = express();

//escuchar peticiones

app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`)
});

//rutas

app.get( '/', (req, res) => {

    res.json({
        ok: true
    });

});