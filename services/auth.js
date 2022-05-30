const { user } = require('pg/lib/defaults');
const pool = require('../config/db');
const timestamp = new Date();
const Model = require('../model/employee');
const TokenModel = require('../model/token');
module.exports = { 
  login : async (username) => {
    try {
      const employee = await Model.Employee.findOne({ where: { username: username } })
      return employee;
    } catch (error) {
      console.log(`Error al obtener username: Error: ${error}`)
    }
    
  },

  saveRefreshToken : async (token, username) => { 
    try{
      await TokenModel.Token.create({
        username: username, 
        token: token, 
        date_created: timestamp, 
        expiration_date: null
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
        username: username, 
        employee_password: employeePassword
      })

      return employee
    } catch (error) { 
      console.log(`Error al hacer signup: Error: ${error}`)
    }
  }
    
}