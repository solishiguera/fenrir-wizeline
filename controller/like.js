const LikeServices = require("../services/like");

module.exports = {
    addLike : async (req, res, next) => {
    try {
      const like = await LikeServices.addLike(req.body.employee_id, req.body.question_id, req.body.username);
      res.json('Like registrado exitosamente.');
    } catch (err) {
      res.json({ message: `Error al registrar like. Err: ${err}` });
    }
  }, 

  getQuestionLikes : async (req, res, next) => { 
    try {
      const likes = await LikeServices.getQuestionLikes(req.params.id);
      res.json({likes});
    } catch (error) {
      res.json({ message: `Error al obtener likes de pregunta. Err: ${err}` });
    }
  },

  
  getEmployeeLikes : async (req, res, next) => { 
    try {
      const likes = await LikeServices.getEmployeeLikes(req.params.id);
      res.json({likes});
    } catch (error) {
      res.json({ message: `Error al obtener likes de empleado. Err: ${err}` });
    }
  },
  

  removeLike : async (req, res, next) => { 
    try {
      const likes = await LikeServices.removeLike(req.body.question_id, req.body.employee_id);
      res.json('Like eliminado exitosamente.');
    } catch (error) {
      res.json({ message: `Error al eliminar like de pregunta. Err: ${err}` });
    }
  }

};