const { response } = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });
        console.log(usuario);

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }

        usuario = new Usuario( req.body );
        
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
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