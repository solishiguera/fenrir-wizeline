const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = {
  Question : sequelize.define('question', {
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 

    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    department_id: {
      type: DataTypes.INTEGER, 
    },

    question_text: { 
      type: DataTypes.STRING, 
      allowNull: false
    },

    is_anonymous: { 
      type: DataTypes.BOOLEAN,
      allowNull: false
    }, 

    date_created: {
      type: DataTypes.DATE
    },

    date_last_modified: {
      type: DataTypes.DATE
    }, 

    like_count: { 
      type: DataTypes.INTEGER
    },

    comment_count: {
      type: DataTypes.INTEGER
    },

    is_answered: {
      type: DataTypes.BOOLEAN
    },

    ask_employee_id: {
      type: DataTypes.INTEGER
    }, 

    full_text_search: {
      type: DataTypes.TSVECTOR
    }
  }, 
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  })

}