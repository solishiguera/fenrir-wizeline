const pool = require('../config/db');
const currentDate = new Date();
const timestamp = currentDate.getTime();

module.exports = { 
  getAllQuestions : () => {
    sql = 'SELECT * FROM question' 
    return new Promise( (resolve, reject) => {
      pool.query(sql, (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  getQuestion : (questionId) => {
    sql = 'SELECT * question WHERE question_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[id], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  addQuestion : (employeeId, departmentId, questionText, isAnonymous, likeCount, commentCount, isAnswered) => {
    sql = 'INSERT INTO question(employee_id, department_id, question_text, is_anonymous, date_created, date_last_modified, like_count, comment_count, is_answered) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeId, departmentId, questionText, isAnonymous, timestamp, timestamp, likeCount, commentCount, isAnswered], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  updateQuestion : (questionId, questionText) => {
    sql = 'UPDATE question_text SET question_text = $1, date_last_modifed = $2 date WHERE question_id = $3'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[questionText, timestamp, questionId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }
  /* Métodos a definir: 
     - getAllQuestions
     - getQuestion
     - addQuestion
     - updateQuestion
  */
}

