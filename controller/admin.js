const AdminServices = require("../services/admin");

module.exports = {
    getAllEmployees: async (req, res, next) => {
    try {
      const employees = await AdminServices.getAllEmployees();
      res.json({ employees });
    } catch (err) {
      res.json({ message: `Error al obtener todos los empleados. Err: ${err}` });
    }
  },

  markAsAnswer: async (req, res, next) => {
    try {
      const employee = await AdminServices.markAsAnswer(req.params.id, req.body.is_answer);
      res.json("Comentario registrado como respuesta.");
    } catch (err) {
      res.json({ message: `Error al registrar comentario como respuesta . Err: ${err}` });
    }
  },

  markAsAdmin: async (req, res, next) => {
    try {
      const employee = await AdminServices.markAsAdmin(req.params.id, req.body.is_admin);
      res.json("Se registró empleado como administrador.");
    } catch (err) {
      res.json({ message: `Error al registrar empleado como administrador. Err: ${err}` });
    }
  },

};