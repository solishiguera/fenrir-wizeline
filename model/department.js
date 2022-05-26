const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = { 
  Department : sequelize.define('department', {
        department_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 

        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    })
}