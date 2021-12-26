const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Pedro')
})

app.listen(3000)