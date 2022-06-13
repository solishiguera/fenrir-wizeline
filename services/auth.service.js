const { user } = require('pg/lib/defaults');
const pool = require('../config/db');
const timestamp = new Date();
const Model = require('../model/employee.model');
const TokenModel = require('../model/token.model');
module.exports = { 
  login : async (username) => {
    try {
      const employee = await Model.Employee.findOne({ where: { username: username } })
      return employee;
    } catch (error) {
      console.log(`Error al obtener username: Error: ${error}`)
    }
    
  },

  safePayload : async (username) => {
    try {
      const employee = await Model.Employee.findOne({ 
        attributes: { exclude: ['employee_password', 'profile_picture'] },
        where: { username: username }
      })
      return employee;
    } catch (error) {
      return console.log(`Error al obtener username: Error: ${error}`)
    }
  },

  saveRefreshToken : async (token, username) => { 
    try {
      const createdIn = new Date()
      const expIn = new Date(createdIn.getTime() + process.env.JWT_REFRESH_EXPIRATION * 60000)

      await TokenModel.Token.create({
        username: username, 
        token: token, 
        date_created: createdIn, 
        expiration_date: expIn
      })

    }catch (error) {
      console.log(`Error al agregar token: Error: ${error}`)
    }
  },

  deleteRefreshToken : async (token) => {
    try{
      await TokenModel.Token.destroy({
        where:{
          token: token
        }
      })
    }catch (error) {
      console.log(`Error al eliminar token: error: ${error}`)
    }
  }, 

  signup : async (employeeName, employeeLastName, deptId, jobTitle, username, employeePassword) => {
    if(deptId == null) { 
      deptId = 101
    }

    try{
      const employee = await Model.Employee.create({
        employee_name: employeeName,
        employee_last_name: employeeLastName,
        department_id: deptId, 
        is_admin: false, 
        job_title: jobTitle, 
        profile_picture: null, 
        username:username, 
        employee_password: employeePassword
      })
      
      return employee;
    } catch (error) { 
      console.log(`Error al hacer signup: Error: ${error}`)
    }
  },

  updateIndexOfEmployees: async () => {
    try {
      await Model.Employee.update({ 
        full_text_search: sequelize.fn('to_tsvector', sequelize.col('employee_name'))
      }, 
      { 
        where: {
          full_text_search: null
        }
      });
    } catch (error) { 
      console.log(`Error al agregar índices pregunta: Error: ${error}`)
    }
  },

  validateRefreshToken : async (token) => {
    try {
      const refreshToken = await TokenModel.Token.findOne({ where: { token: token } })
      return refreshToken
    } catch (error) {
      console.log(`Error al obtener token`)
    }
  }
    
}