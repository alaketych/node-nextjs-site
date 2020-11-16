const Post = require('./Post')
const Stack = require('./Stack')
const Project = require('./Project')
const Category = require('./Category')
const Development = require('./Development')

const sequelize = require('../controllers/database')

//Create M:M Table Associations
const PostCategory = sequelize.define('postcategory', {})
const ProjectStack = sequelize.define('projectstack', {})
const ProjectDevelopment = sequelize.define('projectdevelopment', {})

//M:M Associations
Post.belongsToMany(Category, { through: PostCategory })
Category.belongsToMany(Post, { through: Post })

Project.belongsToMany(Stack, { through: ProjectStack })
Project.belongsToMany(Development, { through: ProjectDevelopment })
ProjectStack.belongsToMany(Project, { through: Project })
ProjectDevelopment.belongsToMany(Project, { through: Project })