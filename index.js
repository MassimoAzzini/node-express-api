// creo il file package.json
// npm init -y

// installo nodemon e modifico script dentro package.json
// npm i nodemon --save-dev
// "start": "nodemon index.js"
// sul terminale lancio npm start

const express = require('express')
const app = express()
const {persone} = require('./persone')

app.get('/api/persone', (req, res) => {
  res.status(200).json({success: true, data: persone})
})

app.get('/api/persone/:id', (req, res) => {
  const {id} = req.params

  const persona = persone.find((persona) => persona.id === id)
  
  res.json({success: true, data: persona})
})


app.listen(3000)