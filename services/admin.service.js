const pool = require('../config/db');
const timestamp = new Date();
const CommentModel = require('../model/comment.model');
const EmployeeModel = require('../model/employee.model');
const QuestionModel = require('../model/question.model');

module.exports = { 
  getAllEmployees : async () => {
    try {
      const employees = await EmployeeModel.Employee.findAll({ 
        attributes: {
          exclude: ['employee_password', 'profile_picture', 'job_title']
        }, 
        order: [['username', 'ASC']] 
      });
      
      return employees
      
    } catch (error) {
      console.error(error)
    }
  },

  markAsAnswer : async (commentId, isAnswer, questionId) => {
    try {
      await CommentModel.Comment.update({ is_answer: isAnswer }, {
        where: {
          comment_id: commentId
        }
      });
      await QuestionModel.Question.update({ is_answered: isAnswer }, {
        where: {
          question_id: questionId
        }
      });
    } catch (error) { 
      console.log(`Error al actualizar comentario: Error: ${error}`)
    }

  }, 

  markAsAdmin : async (employeeId, isAdmin) => {
    try {
      await EmployeeModel.Employee.update({ is_admin: isAdmin }, {
        where: {
          employee_id: employeeId
        }
      });
    } catch (error) { 
      console.log(`Error al actualizar empleado: Error: ${error}`)
    }
    
  }, 
}

