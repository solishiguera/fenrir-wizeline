const UserServices = require("../services/employee");
const SecureEnv = require("../config/security/security");

module.exports = {
  /** 
   * @duplicate ?
  */
  updateEmployee: async (req, res, next) => {
    try {
      const employee = await UserServices.updateEmployee(req.params.id, req.body.is_admin);
      res.json("Empleado actualizado correctamente!");
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