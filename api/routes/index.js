const express = require('express')
const router = express.Router()

//const datarecords = require('../data/_index')
const database = require('../controllers/database')
const postsController = require('../controllers/Post')
const projectController = require('../controllers/Project')


database.sync({ force: false })

router.get('/posts', postsController.getPosts)
router.get('/projects', projectController.getProjects)

router.get('/post/:id', postsController.getPost)
router.get('/project/:id', projectController.getProject)

router.post('/contact')

module.exports = router