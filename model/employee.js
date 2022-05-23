const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = { 
  Employee : sequelize.define('employee', {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 

    employee_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    employee_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    is_admin: { 
      type : DataTypes.BOOLEAN,
      allowNull: false
    },

    job_title: {
      type: DataTypes.STRING
    },

    profile_picture: {
      type: DataTypes.STRING
    },
    
    username: {
      type: DataTypes.STRING
    },

    employee_password: {
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