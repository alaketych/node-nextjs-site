const { DataTypes } = require('sequelize')

const Post = require('./Post')
const Stack = require('./Stack')
const Project = require('./Project')
const Category = require('./Category')
const Development = require('./Development')

const sequelize = require('../controllers/database')

//Create M:M Table Associations
const PostCategory = sequelize.define('postcategory', {
    PostId: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id',
        }
    },

    CategoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id',
        }
    }
})

const ProjectStack = sequelize.define('projectstack', {
    ProjectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'id',
        }
    },

    StackId: {
        type: DataTypes.INTEGER,
        references: {
            model: Stack,
            key: 'id',
        }
    }
})

const ProjectDevelopment = sequelize.define('projectdevelopment', {
    ProjectId:  {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'id',
        }
    },

    DevelopmentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Development,
            key: 'id',
        }
    }
})

//M:M Associations
Post.belongsToMany(Category, { through: PostCategory })
Category.belongsToMany(Post, { through: Post })

Project.belongsToMany(Stack, { through: ProjectStack })
Project.belongsToMany(Development, { through: ProjectDevelopment })
ProjectStack.belongsToMany(Project, { through: Project })
ProjectDevelopment.belongsToMany(Project, { through: Project })

module.exports = {
    ProjectDevelopment,
    ProjectStack,
    PostCategory
}