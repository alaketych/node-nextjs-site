const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const multiparty = require('multiparty')

const database = require('../controllers/database')
const postsController = require('../controllers/Post')
const projectController = require('../controllers/Project')
const { request, response } = require('express')

database.sync({ force: true })

router.get('/posts',               postsController.getPosts)
router.get('/projects',            projectController.getProjects)
router.get('/post/:id',            postsController.getPost)
router.get('/project/:id',         projectController.getProject)

router.post('/contact', (request, response) => {
    console.log('Got body: ', request.body)
    response.send('arrived.')
})

router.get('/contact', (request, response) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "xxx",
            pass: "xxx",
        }
    })

    let info = transporter.sendMail({
        from: "xxx",
        to: "xxx",
        subject: "Hello, this is from vscode.",
        html: "<b>Hello, this is from vscode.</b>",
    })

    // let form = new multiparty.Form()
    // let data = {};
    // form.parse(request, (error, fields) => {
    //     Object.keys(fields).forEach(property => {
    //         data[property] = fields[property].toString()
    //     })

    //     const mail = {
    //     }
    // })
})

module.exports = router