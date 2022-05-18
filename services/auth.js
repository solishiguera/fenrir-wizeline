const pool = require('../config/db');
const timestamp = new Date();

module.exports = { 
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

  saveRefreshToken : (token, username) => { 
    sql = "INSERT INTO token(username, token, date_created, expiration_date) VALUES($1, $2, $3, $4);"
    return new Promise( (resolve, reject) => {
      pool.query(sql,[username, token, timestamp, null], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  deleteRefreshToken : (token) => {
    sql = "DELETE FROM token WHERE token = $1;"
    return new Promise( (resolve, reject) => {
      pool.query(sql,[token], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }, 

  signup : (employeeName, employeeLastName, deptId, jobTitle, username, employeePassword) => {
    if(deptId == null) { 
      deptId = 101
    }

    sql = 'INSERT INTO employee(employee_name, employee_last_name, department_id, is_admin, job_title, profile_picture, username, employee_password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeName, employeeLastName, deptId, "false", jobTitle, null, username, employeePassword], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },
}