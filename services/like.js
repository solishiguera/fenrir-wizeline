const pool = require('../config/db');

module.exports = { 
    addLike : (empId, questionId, username) => {
    sql = 'INSERT INTO likes(employee_id, question_id, username) VALUES($1, $2, $3);'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [empId, questionId, username], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }, 

  getQuestionLikes : (questionId) => { 
    sql = 'SELECT question_id, employee_id, username FROM likes WHERE question_id = $1;'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [questionId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }, 
  
  getEmployeeLikes : (empId) => { 
    sql = 'SELECT l.question_id, q.question_text FROM likes l JOIN question q ON l.question_id = q.question_id WHERE l.employee_id = $1;'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [empId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  removeLike : (questionId, empId) => { 
    sql = 'DELETE FROM likes WHERE question_id = $1 AND employee_id = $2;'
    return new Promise( (resolve, reject) => {
      pool.query(sql, [questionId, empId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }
}

