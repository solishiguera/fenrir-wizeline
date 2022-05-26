const EmployeeServices = require("../services/employee");
const SecureEnv = require("../config/security/security");

module.exports = {
  /** 
   * @duplicate ?
  */
  updateEmployee: async (req, res, next) => {
    try {
      const employee = await EmployeeServices.updateEmployee(req.params.id, req.body.is_admin);
      res.json("Empleado actualizado correctamente!");
    } catch (err) {
      res.json({ message: `Error al actualizar empleado. Err: ${err}` });
    }
  },

  getEmployeesByQuery:async ( req, res, next ) => {
    try {
      const employees = await UserServices.getEmployeesByQuery(req.params.text);
      res.json({ employees });
    }
    catch ( err ) {
      res.json({message:`Error al realizar tu búsqueda. Intentalo de nuevo. Error: ${err}`})
    }
  },


  deleteEmployee: async (req, res, next) => {
    try {
      const user = await EmployeeServices.deleteEmployee(req.params.id);
      res.json("Eliminado correctamente!");
    } catch (err) {
      res.json({ message: `Error al eliminar empleado. Err: ${err}` })
    }
  }

};