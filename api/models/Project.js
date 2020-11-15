const { DataTypes } = require('sequelize')
const sequelize = require('./controllers/database')

const Project = sequelize.define('project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    title: {
        label: DataTypes.STRING,
        allowNull: false,
    },

    preview: {
        label: DataTypes.TEXT,
        allowNull: false,
    },

    description: {
        label: DataTypes.TEXT,
        allowNull: false,
    },

    githublink: {
        label: DataTypes.STRING,
        allowNull: false,
    },

    photo: {
        label: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Project