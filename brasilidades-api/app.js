require('dotenv').config()

const express = require('express')
const personalitiesRoutes = require('./routes/personalities.routes.js')
const musicRoutes = require('./routes/musics.routes.js')

const app = express()

//conectar no banco de dados
require('./db/index.js')()

// Utilizar o json body das requisições
app.use(express.json())

// Rotas

app.use('/', personalitiesRoutes)
app.use('/', musicRoutes)
//listen
app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT}`)
})
