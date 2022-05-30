const pool = require("../config/db");
const timestamp = new Date();
const Model = require("../model/comment");
const { Employee } = require("../model/employee");

module.exports = {
  addComment: async (employeeId, questionId, commentText, isAnonymous) => {
    employeeId = isAnonymous ? 404 : employeeId;

    try {
      await Model.Comment.create({
        employee_id: employeeId,
        question_id: questionId,
        comment_text: commentText,
        date_created: timestamp,
        is_answer: false,
        is_anonymous: isAnonymous
      });
    } catch (error) {
      console.log(`Error al agregar pregunta: Error: ${error}`);
    }
  },

  getCommentsQuestion: async (questionId) => {
    try {
      const comments = await Model.Comment.findAll({
        where: { question_id: questionId },
        order: ['date_last_modified', 'DESC']
      });
      return comments;
    } catch (error) {
      console.log(`Error al obtener comentarios de pregunta: Error: ${error}`);
    }
  },

  getCommentWithId: async (commentId) => {
    try {
        const comment = await Model.Comment.findAll({
        where: { comment_id: commentId }
        })
        return comment;
    } catch (error) {
    console.log(`Error al obtener comentario: Error: ${error}`);
    }
  }
};
