const Post = require('../models/Post')
const Category = require('../models/Category')
const { PostCategory } = require('../models/Associations')

async function getPosts(request, response) {
    try {
        const posts = await Post.findAll({
            include: {
                model: Category,
                attributes: ['label'],
            }
        }).then(post => response.send(post))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function getPost(request, response) {
    try {
        const post = await Post.findOne({
            where: {
                id: request.params.id
            }
        })
        .then(post => response.send(post))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

module.exports = {
    getPost,
    getPosts,
}