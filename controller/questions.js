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
      const user = await UserServices.getQuestion(req.params.question_id);
      res.json({ user });
    } catch (err) {
      res.json({ message: `Error al obtener pregunta. Err: ${err}` });
    }
  },

  addQuestion : async (req, res, next) => {
    try {
      const user = await UserServices.addQuestion(req.body.employee_id, req.body.department_id, req.body.question_text, req.body.is_anonymous, req.body.like_count, req.body.comment_count, req.body.is_answered);
      res.json("Pregunta agregada!");
    } catch (err) {
      res.json({ message: `Error al agregar pregunta. Err: ${err}` });
    }
  },

  updateQuestion: async (req, res, next) => {
    try {
      const user = await UserServices.updateQuestion(req.params.question_id, req.body.question_text, req.body.date_last_modifed);
      res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar pregunta. Err: ${err}` });
    }
  }

};