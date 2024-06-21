const express = require('express');
const router = express.Router()
const {persone} = require('../persone') // è come se facessi una copia, quindi quando con la chiamata in POST faccio il push non si modifica il file originale e quando ricarico la persona pushata non ci sarà


router.get('/', (req, res) => {
  res.status(200).json({success: true, data: persone})
})

router.get('/:id', (req, res) => {
  const {id} = req.params

  const persona = persone.find((persona) => persona.id === id)
  
  res.json({success: true, data: persona})
})

// AGGIUNGERE una persona
router.post('/', (req, res) => {
  console.log(req.body);
  const persona = req.body
  persone.push(persona)
  res.status(200).json({success: true, data: persone})
})

//MODIFICARE una persona (impostato cosi cambia tutti i dati)
router.put('/:id', (req, res) => {
  const {id} = req.params

  const persona = req.body

  persone[Number(id) - 1] = persona // calcolo l'indice di questa persona all'interno dell'array persone
  
  res.status(200).json({success: true, data: persone})
})

//CANCELLARE una persona (impostato cosi cambia tutti i dati)
router.delete('/:id', (req, res) => {
  const {id} = req.params

  const index = persone.findIndex(persona => persona.id === id) // uso il findIndex per recuperare l'indice della persona all'interno dell'array persone

  persone.splice(index, 1)

  res.status(200).json({success: true, data: persone})
})

module.exports = router