const { DataTypes } = require('sequelize')
const sequelize = require('./controllers/database')

const Stack = sequelize.define('stack', {
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

module.exports = Stack