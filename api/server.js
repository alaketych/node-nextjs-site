const express = require('express')
const bodyParser = require('body-parser')

const port = 8000
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const home = require('./routes/index')
server.use('/', home)

server.listen(port, () => {
    console.log(`Server is running on the port: ${ port }`)
})