const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = { 
  Token : sequelize.define('token', {
        token_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        token: {
            type: DataTypes.STRING,
            allowNull: false
        },

        date_created: { 
            type : DataTypes.DATE
        },

        expiration_date: { 
            type : DataTypes.DATE
        },
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    })
}