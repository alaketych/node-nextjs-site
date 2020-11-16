const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../blog.sqlite',
    define: {
        timestamps: false,
    },
})

sequelize.authenticate()
    .then(error => {
        console.log('Connection has been estanblished successfully')
    })
    .catch(error => {
        console.log('Unable to connect to the database')
    })

module.exports = sequelize