const { DataTypes } = require('sequelize')
const sequelize = require('./controllers/database')

const Post = sequelize.define('post', {
    id:  {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    photo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Post