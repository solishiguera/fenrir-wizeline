const pool = require('../config/db');
const timestamp = new Date();

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
    sql = 'SELECT * FROM question WHERE question_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[questionId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },
  getQuestionWithId : (userId) => {
    sql = 'SELECT * FROM question WHERE employee_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[userId], (err, res) => {
        if(err) {
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }

  ,

  addQuestion : (employeeId, departmentId, questionText, isAnonymous, askEmployeeId) => {
    if(isAnonymous) { 
      employeeId = 404;
    }

    employeeId = isAnonymous ? 404 : employeeId; 
    sql = 'INSERT INTO question(employee_id, department_id, question_text, is_anonymous, date_created, date_last_modified, like_count, comment_count, is_answered, ask_employee_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[employeeId, departmentId, questionText, isAnonymous, timestamp, timestamp, 0, 0, 0, askEmployeeId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  updateQuestion : (questionId, questionText) => {
    sql = 'UPDATE question question_text SET question_text = $1, date_last_modified = $2 WHERE question_id = $3'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[questionText, timestamp, questionId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  }, 

  deleteQuestion : (questionId) => {
    sql = 'DELETE FROM question WHERE question_id = $1'
    return new Promise( (resolve, reject) => {
      pool.query(sql,[questionId], (err, res) => {
        if(err) { 
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  getQuestionsByQuery:(search) =>{
    sql = 'SELECT * FROM question WHERE full_text_search @@ to_tsquery($1)'
    return new Promise((resolve, reject) => {
      pool.query(sql,[search],(err,res)=>{
        if(err){
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  updateIndexOfQuestions:() =>{
    sql = 'UPDATE question SET full_text_search = (to_tsvector(question_text)) WHERE full_text_search IS null'
    return new Promise((resolve, reject) => {
      pool.query(sql,(err,res)=>{
        if(err){
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

}

