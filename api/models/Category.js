const { DataTypes } = require('sequelize')
const sequelize = require('../controllers/database')

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    label: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Category