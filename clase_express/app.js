const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

// Servir contenido estatico:
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
}) 


app.listen(port, () => {
  console.log(`App corriendo en: http://localhost:${port}`)
})