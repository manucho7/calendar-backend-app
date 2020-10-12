const { response } = require('express');
const router = require('./auth');

//Todas deben pasar por la validacion de JWT

//Obtener eventos
router.get('/', getEventos);

//Crear un nuevo evento
router.post('/', crearEvento);

//Actualizar Evento
router.put('/:id', actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);