const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/jelou', (req, res) => {
  res.send('Jelou jelou- XP')
})

app.get('*', (req, res) => {
  res.send('404 | Page not found')
}) 


app.listen(port, () => {
  console.log(`App corriendo en: http://localhost:${port}`)
})