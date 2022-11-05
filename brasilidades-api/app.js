require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const personalitiesRoutes = require('./routes/personalities.routes.js')
const musicRoutes = require('./routes/musics.routes.js')
const authRoutes = require('./routes/auth.routes.js')

const app = express()

//conectar no banco de dados
require('./db/index.js')()

//Permitir conexões de outras origens

// Sem usar a lib do cors
// app.use((req, res, next) => {
//   res.set('Access-Control-Allow-Origin', '*')
//   next()
// })

// usando lib e restrigindo o dominio
// app.use(
//   cors({
//     origin: 'http://localhost:300',
//   })
// )

// usando lib e liberando para qualquer dominio

app.use(cors())

//Em desenvolvimento show app logs
app.use(logger('dev'))

// Utilizar o json body das requisições
app.use(express.json())

// Rotas

app.use('/', authRoutes)
app.use('/', personalitiesRoutes)
app.use('/', musicRoutes)
//listen

require('./error-handling')(app)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT}`)
})
