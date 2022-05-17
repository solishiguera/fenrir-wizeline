const UserServices = require("../services/questions");

module.exports = {
  getAllQuestions: async (req, res, next) => {
    try {
      const questions = await UserServices.getAllQuestions();
      res.json({ questions });
    } catch (err) {
      res.json({ message: `Error al obtener preguntas. Err: ${err}` });
    }
  },

  getQuestion: async (req, res, next) => {
    try {
      const question = await UserServices.getQuestion(req.params.id);
      res.json({ question });
    } catch (err) {
      res.json({ message: `Error al obtener pregunta. Err: ${err}` });
    }
  },

  getQuestionWithId: async (req, res, next) =>{
    try{
      const question = await UserServices.getQuestionWithId(req.params.id);
      res.json({question});
    }catch (err){
      res.json({message:`Error al obtener la pregunta. Err: ${err}`});
    }
  },

  addQuestion: async (req, res, next) => {
    try {
      const user = await UserServices.addQuestion(req.body.employee_id, req.body.department_id, req.body.question_text, req.body.is_anonymous, req.body.ask_employee_id);
      res.json("Pregunta agregada.");
      updateIndexOfQuestions();
    } catch (err) {
      res.json({ message: `Error al agregar pregunta. Err: ${err}` });
    }
  },

  updateQuestion: async (req, res, next) => {
    try {
      const user = await UserServices.updateQuestion(req.params.id, req.body.question_text);
      res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar pregunta. Err: ${err}` });
    }
  },

  deleteQuestion: async (req, res, next) => { 
    try {
      const user = await UserServices.deleteQuestion(req.params.id);
      res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al eliminar pregunta. Err: ${err}` })
    }
  }
,
  getQuestionDepartment:async (req,res,next) =>{
    try{
      const question = await UserServices.getQuestionDepartment(req.params.id);
      res.json({question});
    }catch(err){
      res.json({message:`Error al obtener la pregunta. Err: ${err}`})
    }
  },

  getQuestionsByQuery:async ( req, res, next ) => {
    try {
      const questions = await UserServices.getQuestionsByQuery(req.params.text);
      res.json({ questions });
    }
    catch ( err ) {
      res.json({message:`Error al realizar tu búsqueda. Intentalo de nuevo. Error: ${err}`})
    }
  }
};

async function updateIndexOfQuestions() {
  try {
    await UserServices.updateIndexOfQuestions();
  }
  catch {
    res.json({message:`Error al realizar tu búsqueda. Intentalo de nuevo. Error: ${err}`})
  }
}