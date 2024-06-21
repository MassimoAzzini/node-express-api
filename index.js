// creo il file package.json
// npm init -y

// installo nodemon e modifico script dentro package.json
// npm i nodemon --save-dev
// "start": "nodemon index.js"
// sul terminale lancio npm start

const express = require('express')
const app = express()
const {persone} = require('./persone') // è come se facessi una copia, quindi quando con la chiamata in POST faccio il push non si modifica il file originale e quando ricarico la persona pushata non ci sarà

app.use(express.json())

app.get('/api/persone', (req, res) => {
  res.status(200).json({success: true, data: persone})
})

app.get('/api/persone/:id', (req, res) => {
  const {id} = req.params

  const persona = persone.find((persona) => persona.id === id)
  
  res.json({success: true, data: persona})
})

// AGGIUNGERE una persona
app.post('/api/persone', (req, res) => {
  console.log(req.body);
  const persona = req.body
  persone.push(persona)
  res.status(200).json({success: true, data: persone})
})

//MODIFICARE una persona (impostato cosi cambia tutti i dati)
app.put('/api/persone/:id', (req, res) => {
  const {id} = req.params

  const persona = req.body

  persone[Number(id) - 1] = persona // calcolo l'indice di questa persona all'interno dell'array persone
  
  res.status(200).json({success: true, data: persone})
})

//CANCELLARE una persona (impostato cosi cambia tutti i dati)
app.delete('/api/persone/:id', (req, res) => {
  const {id} = req.params

  const index = persone.findIndex(persona => persona.id === id) // uso il findIndex per recuperare l'indice della persona all'interno dell'array persone

  persone.splice(index, 1)

  res.status(200).json({success: true, data: persone})
})



app.listen(3000)