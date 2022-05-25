const pool = require('../config/db');
const LikeModel = require('../model/likes');
const QuestionModel = require('../model/question')

module.exports = { 
    addLike : async (empId, questionId, username) => {
      try{
        await LikeModel.Like.create({
          employee_id: empId,
          question_id: questionId,
          username: username
        })
      }catch (error) {
      console.log(`Error al agregar like: Error: ${error}`)
    }
  }, 

  getQuestionLikes : async (questionId) => { 
    try{
      const questionLikes = await LikeModel.Like.findOne({
        where: {question_id: questionId}
      })
      return questionLikes;
    }catch (error) {
      console.log(`Error al obtener likes de la pregunta: Error: ${error}`)
    }
  }, 
  
  getEmployeeLikes : async (empId) => { 
    try{
      await LikeModel.Like.findAll({
        where:{
          employee_id: empId
        },
        attributes: ['question_id'],
        include:{
          model: QuestionModel.Question,
          attributes: ['question_text']
        }
      })
    }catch (error) {
      console.log(`Error al obtener los likes de empleados: Error: ${error}`)
    }
  },

  removeLike : async (questionId, empId) => { 
    try{
      await LikeModel.Like.destroy({
        where: {
          question_id: questionId,
          employee_id: empId
        }
      })
    }catch (error) {
      console.log(`Error al eliminar pregunta: error: ${error}`)
    }
  }
}

