const express = require('express')
const server = express()
const cors = require('cors')
const nbaRouter = require('./routes/nbaRoute')
require('dotenv').config()

server.use('/', nbaRouter)
server.listen(process.env.PORT, (()=>{
    console.log(`Server up on on port: ${process.env.PORT}`)
}))

