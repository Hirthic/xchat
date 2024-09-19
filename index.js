const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Develop Pannu da Songi')
})

app.listen(port,() => {
  console.log(`Start Agitan da`)
})