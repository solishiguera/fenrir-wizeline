const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db2');

module.exports = { 
  Comment : sequelize.define('comment', {
        comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        }, 

        employee_id: {
        type: DataTypes.INTEGER
        },

        question_id: {
        type: DataTypes.INTEGER
        },

        comment_text: {
        type: DataTypes.STRING,
        allowNull: false
        },

        date_created: { 
        type : DataTypes.DATE
        },

        is_answer: {
        type: DataTypes.BOOLEAN
        },

        is_anonymous: {
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