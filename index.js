// creo il file package.json
// npm init -y

// installo nodemon e modifico script dentro package.json
// npm i nodemon --save-dev
// "start": "nodemon index.js"
// sul terminale lancio npm start

const express = require('express')
const app = express()
const personeRouter = require('./routes/persone')
const prodottiRouter = require('./routes/prodotti')

app.use(express.json())

app.use('/api/persone', personeRouter)
app.use('/api/prodotti', prodottiRouter)


app.listen(3000)