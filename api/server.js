const express = require('express')

const port = 8000
const server = express()

const home = require('./routes/index')

server.use('/', home)

server.listen(port, () => {
    console.log(`Server is running on the port: ${ port }`)
})