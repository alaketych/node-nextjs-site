const express = require('express')
const router = express.Router()

const database = require('../controllers/database')
const postsController = require('../controllers/Post')
const projectController = require('../controllers/Project')

database.sync({ force: true })

router.get('/posts',               postsController.getPosts)
router.get('/projects',            projectController.getProjects)
router.get('/post/:id',            postsController.getPost)
router.get('/project/:id',         projectController.getProject)

router.get('/contact', (request, response) => {
    response.send('asd')
})

router.post('/contact', (request, response) => {
    console.log('Got body: ', request.body)
    response.send('arrived.')
})

module.exports = router