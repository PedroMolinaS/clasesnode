const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get API - Controlador'
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body


    res.status(201).json({
        ok: true,
        msg: 'post API - Controlador',
        nombre, edad
    })
}

const usuariosPut = (req, res = response) => {
    res.status(400).json({
        ok: true,
        msg: 'put API - Controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controler'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}