const { ProjectStack } = require('../models/Associations')

async function getProjectStack(request, response) {
    try {
        const ProjectStacks = await ProjectStack.findAll()
            .then(projectStack => response.send(projectStack))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

module.exports = {
    getProjectStack
}