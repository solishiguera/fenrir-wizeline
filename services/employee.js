const pool = require('../config/db');
const timestamp = new Date();

module.exports = { 
    getEmployee : (employeeId) => {
    sql = 'SELECT * FROM employee WHERE employee_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  addEmployee : (employeeName, employeeLastName, departmentId, isAdmin, jobTitle, profilePicture, username, employeePassword) => {
    sql = 'INSERT INTO employee(employee_name, employee_last_name, department_id, is_admin, job_title, profile_picture, username, employee_password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING employee_id'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeName, employeeLastName, departmentId, isAdmin, jobTitle, profilePicture, username, employeePassword], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  updateEmployee : (employeeId, isAdmin) => {
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

  deleteEmployee : (employeeId) => {
    sql = 'DELETE FROM employee WHERE employee_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }
}

