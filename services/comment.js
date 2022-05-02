const pool = require('../config/db');
const timestamp = new Date();

module.exports ={
    addComment : (employeeId, question_id, comment_text, isAnonymous) => {
        if(isAnonymous) {
            employeeId = 404
        }
        sql = 'INSERT INTO comment(employee_id, question_id, comment_text, date_created, is_answer, is_anonymous ) VALUES ($1,$2,$3,$4,$5,$6)'
        return new Promise( (resolve, reject) => {
            pool.query(sql,[employeeId,question_id,comment_text, timestamp, 0, isAnonymous], (err, res) => {
                if(err) {
                    return reject(err)
                }
                return resolve(res.rows)
            })
        })
    },

    getCommentsQuestion : (question_id) => {
        sql = 'SELECT * FROM comment WHERE question_id = $1'
        return new Promise((resolve, reject) => {
            pool.query(sql,[question_id], (err, res) => {
                if(err){
                    return reject(err)
                }
                return resolve(res.rows)
            })
        })
    },
    getCommentWithId : (comment_id) => {
        sql = 'SELECT * FROM comment WHERE comment_id = $1'
        return new Promise((resolve, reject) => {
            pool.query(sql,[comment_id],(err,res) => {
                if(err){
                    return reject(err)
                }
                return resolve(res.rows)
            })
        })
    }


}