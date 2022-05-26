const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const QuestionModel = require('../model/question')


module.exports = { 
  Like : sequelize.define('likes', {
        like_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 

        employee_id: {
            type: DataTypes.STRING
        },

        question_id: {
            type: DataTypes.STRING
        },

        username: {
            type: DataTypes.STRING
        }
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    })
}