const { DataTypes } = require('sequelize')
const sequelize = require('./controllers/database')

const Development = sequelize.define('development', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Development