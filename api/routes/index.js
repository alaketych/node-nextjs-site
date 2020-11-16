const express = require('express')
const router = express.Router()

//const records = require('../data/_index')

const ad = require('../data/recordPost')

const postsConteroller = require('../controllers/postControllers')
const projectController = require('../controllers/projectController')

router.get('/posts', postsConteroller.getPosts)
router.get('/projects', projectController.getProjects)

router.get('/post/:id', postsConteroller.getPost)
router.get('/project/:id', projectController.getProject)

router.post('/contact')

module.exports = router