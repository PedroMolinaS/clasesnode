const express = require('express')
require('dotenv').config()

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }

    middlewares(){
        // Directorio publico
        this.app.use(express.static('public'))
    }


    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API'
            })
        })
 
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                ok: true,
                msg: 'post API'
            })
        })
  
        this.app.put('/api', (req, res) => {
            res.status(400).json({
                ok: true,
                msg: 'put API'
            })
        })
  
        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'delete API'
            })
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server activo en http://localhost:${this.port}`)
          })
    }


}

module.exports = Server