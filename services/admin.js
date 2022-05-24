const pool = require('../config/db');
const timestamp = new Date();
const model = require('../model/employee');

module.exports = { 
  getAllEmployees : async () => {
    try {
      const employees = await model.Employee.findAll();
      console.log(employees)
      return employees
      
    } catch (error) {
      console.error(error)
    }
  },

  markAsAnswer : (commentId, isAnswer) => {
    sql = 'UPDATE comment is_answer SET is_answer = $2 WHERE comment_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[commentId, isAnswer], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }, 

  markAsAdmin : (employeeId, isAdmin) => {
    sql = 'UPDATE employee is_admin SET is_admin = $2 WHERE employee_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeId, isAdmin], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }, 
}

