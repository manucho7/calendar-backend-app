const { response } = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async ( req, res = response ) => {

    // const { name, email, password } = req.body;

    const usuario = new Usuario( req.body );

    try {
        
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            msg: 'registro'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el admin'
        });
    }
}

const loginUsuario = ( req, res = response ) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
} 

const revalidarToken = ( req, res ) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}


module.exports = {
    crearUsuario,
    revalidarToken,
    loginUsuario
}