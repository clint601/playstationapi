const express = require('express')
const server = express()
const router = require('./routes/router')
const port = process.env.port || 3000

server.set('view engine', 'ejs')

server.use('/', router)



server.listen(port,()=> console.log(`playstation suck but they got god of war...${port}`))