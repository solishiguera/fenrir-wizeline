const { Model } = require('sequelize/types');
const pool = require('../config/db');
const LikeModel = require('../model/likes');

module.exports = { 
    addLike : (empId, questionId, username) => {
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

  getQuestionLikes : (questionId) => { 
    try{
      const questionLikes = await LikeModel.Like.findOne({
        where: {question_id: questionId}
      })
      return questionLikes;
    }catch (error) {
      console.log(`Error al obtener likes de la pregunta: Error: ${error}`)
    }
  }, 
  
  getEmployeeLikes : (empId) => { 
    try{
      await LikeModel.Like.findAll({
        where:{
          employee_id: empId
        },
        attributes: ['question_id'],
        include:{
          model: Model,
          attributes: ['question_text']
        }
      })
    }catch (error) {
      console.log(`Error al obtener los likes de empleados: Error: ${error}`)
    }
  },

  removeLike : (questionId, empId) => { 
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

