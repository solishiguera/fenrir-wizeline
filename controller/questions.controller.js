const QuestionServices = require("../services/questions.service");

module.exports = {
  getAllQuestions: async (req, res, next) => {
    try {
      const questions = await QuestionServices.getAllQuestions();
      return res.json({ questions });
    } catch (err) {
      res.json({ message: `Error al obtener preguntas. Err: ${err}` });
    }
  },

  getQuestion: async (req, res, next) => {
    try {
      const question = await QuestionServices.getQuestion(req.params.id);
      return res.json({ question });
    } catch (err) {
      res.json({ message: `Error al obtener pregunta. Err: ${err}` });
    }
  },

  addQuestion: async (req, res, next) => {
    try {
      const user = await QuestionServices.addQuestion(req.body.employee_id, req.body.department_id, req.body.question_text, req.body.is_anonymous, req.body.ask_employee_id);
      // updateIndexOfQuestions(); // It throws an error when tested with this.
      return res.json("Pregunta agregada.");
    } catch (err) {
      res.json({ message: `Error al agregar pregunta. Err: ${err}` });
    }
  },

  updateQuestion: async (req, res, next) => {
    try {
      const user = await QuestionServices.updateQuestion(req.params.id, req.body.question_text);
      return res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar pregunta. Err: ${err}` });
    }
  },

  deleteQuestion: async (req, res, next) => { 
    try {
      const user = await QuestionServices.deleteQuestion(req.params.id);
      return res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al eliminar pregunta. Err: ${err}` })
    }
  },
  
  getQuestionDepartment:async (req,res,next) =>{
    try{
      const question = await QuestionServices.getQuestionDepartment(req.params.id);
      return res.json({question});
    }catch(err){
      res.json({message:`Error al obtener la pregunta. Err: ${err}`})
    }
  },

  getQuestionsByQuery:async ( req, res, next ) => {
    try {
      const questions = await QuestionServices.getQuestionsByQuery(req.params.text);
      return res.json({ questions });
    }
    catch ( err ) {
      res.json({message:`Error al realizar tu búsqueda. Intentalo de nuevo. Error: ${err}`})
    }
  }
};

async function updateIndexOfQuestions() {
  try {
    await QuestionServices.updateIndexOfQuestions();
  }
  catch {
    res.json({message:`Error al realizar tu búsqueda. Intentalo de nuevo. Error: ${err}`})
  }
}