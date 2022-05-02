const UserServices = require("../services/admin");

module.exports = {
    getAllEmployees: async (req, res, next) => {
    try {
      const employees = await UserServices.getAllEmployees();
      res.json({ employees });
    } catch (err) {
      res.json({ message: `Error al obtener empleados. Err: ${err}` });
    }
  },

  markAsAnswer: async (req, res, next) => {
    try {
      const employee = await UserServices.markAsAnswer(req.params.id, req.body.is_answer);
      res.json("Comentario actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar comentario. Err: ${err}` });
    }
  },

  markAsAdmin: async (req, res, next) => {
    try {
      const employee = await UserServices.markAsAdmin(req.params.id, req.body.is_admin);
      res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar empleado. Err: ${err}` });
    }
  },

};