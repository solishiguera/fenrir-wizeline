const UserServices = require("../services/employee");

module.exports = {
    getEmployee: async (req, res, next) => {
    try {
      const employee = await UserServices.getEmployee(req.params.id);
      res.json({ employee });
    } catch (err) {
      res.json({ message: `Error al obtener empleado. Err: ${err}` });
    }
  },

  addEmployee: async (req, res, next) => {
    try {
      const employee = await UserServices.addEmployee(req.body.employee_name, req.body.employee_last_name, req.body.job_title, req.body.username, req.body.employee_password );
      res.json("Empleado agregado.");
    } catch (err) {
      res.json({ message: `Error al agregar empleado. Err: ${err}` });
    }
  },

  updateEmployee: async (req, res, next) => {
    try {
      const employee = await UserServices.updateEmployee(req.params.id, req.body.is_admin);
      res.json("Actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar empleado. Err: ${err}` });
    }
  },

  deleteEmployee: async (req, res, next) => { 
    try {
      const user = await UserServices.deleteEmployee(req.params.id);
      res.json("Eliminado correctamente!");
    } catch (err) {
      res.json({ message: `Error al eliminar empleado. Err: ${err}` })
    }
  }

};