require('dotenv').config()

const express = require('express')

const app = express()

//conectar no banco de dados
require('./db/index.js')()

// Utilizar o json body das requisições
app.use(express.json())

// Rotas

app.get('/', (req, res) => {
  res.json({ msg: 'Connected' })
})

//listen
app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT}`)
})
