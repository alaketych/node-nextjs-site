const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../blog.sqlite'
})

sequelize.authenticate()
    .then(error => {
        console.log('Connection has been estanblished successfully')
    })
    .catch(error => {
        console.log('Unable to connect to the database')
    })

sequelize.sync()
sequelize.sync({ force: false })

module.exports = sequelize