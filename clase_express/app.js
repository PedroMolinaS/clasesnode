const express = require('express')
const app = express()
const port = 8080

// Servir contenido estatico:
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

app.get('/jelou', (req, res) => {
  res.send('Jelou jelou- XP')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
}) 


app.listen(port, () => {
  console.log(`App corriendo en: http://localhost:${port}`)
})