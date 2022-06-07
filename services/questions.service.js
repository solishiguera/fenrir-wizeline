const sequelize = require('../config/db');
const timestamp = new Date();
const Model = require('../model/question.model');
const { Op } = require("sequelize");

module.exports = { 
  getAllQuestions : async () => {
    try {
      // const questions = await Model.Question.findAll( {order: ['date_last_modified', 'ASC']} )
      const questions = await Model.Question.findAll(
        {
          order: sequelize.col('date_last_modified'),
        }
      );

      return questions;
    } catch (error) {
      console.log(`Error al obtener username: Error: ${error}`)
    }
  },

  getQuestion : async (questionId) => {
    try {
      const question = await Model.Question.findOne({ where: { question_id: questionId } })
      return question
    } catch (error) {
      console.log(`Error al obtener username: Error: ${error}`)
    }
  },

  addQuestion : async (employeeId, departmentId, questionText, isAnonymous, askEmployeeId) => {
    employeeId = isAnonymous ? 404 : employeeId;

    try {
      await Model.Question.create({
        employee_id: employeeId,
        department_id: departmentId,
        question_text: questionText,
        is_anonymous: isAnonymous,
        date_created: timestamp,
        date_last_modified: timestamp,
        like_count: 0,
        comment_count: 0,
        is_answered: false, 
        ask_employee_id: askEmployeeId
      })
    } catch (error) {
      console.log(`Error al agregar pregunta: Error: ${error}`)
    }
    
  },

  updateQuestion : async (questionId, questionText) => {
    try {
      await Model.Question.update({ 
        question_text: questionText,  date_last_modified: timestamp 
      }, 
      {
        where: {
          question_id: questionId
        }
      });
    } catch (error) { 
      console.log(`Error al actualizar pregunta: Error: ${error}`)
    }
    
  }, 

  deleteQuestion : async (questionId) => {
    try {
      await Model.Question.destroy({
        where: {
          question_id: questionId
        }
      });
    } catch (error) {
      console.log(`Error al eliminar pregunta: error: ${error}`)
    }

  },

  getQuestionsByQuery: async (search) => {
    try {
      const questions = await Model.Question.findAll({
          where: {full_text_search: {[Op.match]: sequelize.fn('to_tsquery', search)}}
      })
      return questions
    } catch (error) {
      console.log(`Error al obtener preguntas: Error: ${error}`)
    }

    // 'SELECT * FROM question WHERE full_text_search @@ to_tsquery($1)'
  },

  updateIndexOfQuestions: async () => {
    try {
      await Model.Question.update({ 
        full_text_search: sequelize.fn('to_tsvector', sequelize.col('question_text'))
      }, 
      { 
        where: {
          full_text_search: null
        }
      });
    } catch (error) { 
      console.log(`Error al agregar índices pregunta: Error: ${error}`)
    }
  },

}

