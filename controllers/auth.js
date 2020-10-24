const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
const jwt = require('../helpers/jwt');



const crearUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });
        console.log(usuario);

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo'
            });
        }

        usuario = new Usuario( req.body );

        //Encriptar password
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync( password, salt );
        
        await usuario.save();

        //Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );

    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el admin'
        });
    }
}

const loginUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const usuario = await Usuario.findOne({ email });

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe usuario con ese email'
            });
        }

        // Confirmar passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        //Generar nuestro JWT
        const token = await generarJWT( usuario.id, usuario.name );

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el admin'
        });

    }

} 

const revalidarToken = async ( req, res ) => {

    const { uid, name } = req;

    const token = await jwt.generarJWT( uid, name );

    res.json({
        ok: true,
        uid,
        name,
        token,
    });
}


module.exports = {
    crearUsuario,
    revalidarToken,
    loginUsuario
}