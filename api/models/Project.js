const { DataTypes } = require('sequelize')
const sequelize = require('../controllers/database')

const Project = sequelize.define('project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    preview: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    githublink: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Project