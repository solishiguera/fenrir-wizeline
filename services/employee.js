const pool = require('../config/db');
const timestamp = new Date();

module.exports = { 
    userSignin : (username) => {
    sql = 'SELECT * FROM employee WHERE username = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[username], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  login : (username) => {
    sql = "SELECT * from employee WHERE username = $1"
    return new Promise( (resolve, reject) => {
      pool.query(sql,[username], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  addEmployee : (employeeName, employeeLastName, jobTitle, username, employeePassword) => {
    sql = 'INSERT INTO employee(employee_name, employee_last_name, department_id, is_admin, job_title, profile_picture, username, employee_password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeName, employeeLastName, 101, "false", jobTitle, null, username, employeePassword], (err, res) => {
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

