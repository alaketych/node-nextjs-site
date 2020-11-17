const Project = require('../models/Project')

async function getProjects(request, response) {
    try {
        const projects = await Project.findAll()
            .then(project => response.send(project))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function getProject(request, response) {
    try {
        const project = await Project.findOne({
            where: {
                id: request.params.id
            }
        })
            .then(project => response.send(project))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

module.exports = {
    getProject,
    getProjects,
}