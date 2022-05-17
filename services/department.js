const pool = require('../config/db');

module.exports = { 
  getDepartments : () => { 
    sql = 'SELECT * FROM department d WHERE d.is_active = TRUE AND d.department_id != 404 AND d.department_id != 101'
    return new Promise( (resolve, reject) => {
      pool.query(sql, (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  getDepartment : (deptId) => { 
    sql = 'SELECT * FROM department WHERE department_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [deptId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  addDepartment : (deptName) => { 
    sql = 'INSERT INTO department(department_name, is_active) VALUES($1, TRUE)'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [deptName] ,(err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  updateDepartment : (deptId, isActive, deptName) => { 
    sql = 'UPDATE department SET is_active = $1, department_name = $2 WHERE department_id = $3'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [isActive, deptName, deptId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  deleteDepartment : (deptId) => { 
    sql = 'DELETE FROM department WHERE department_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [deptId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }

};