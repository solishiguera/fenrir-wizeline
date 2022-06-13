const EmployeeServices = require("../services/employee.service");
const SecureEnv = require("../config/security/security");

module.exports = {

  updateEmployee: async (req, res, next) => {
    try {
      const employee = await EmployeeServices.updateEmployee(req.params.id, req.body.is_admin);
      return res.json("Empleado actualizado correctamente!");
    } catch (err) {
      return res.json({ message: `Error al actualizar empleado. Err: ${err}` });
    }
  },
  
  getEmployeesByQuery:async ( req, res, next ) => {
    try {
      const employees = await EmployeeServices.getEmployeesByQuery(req.params.text);
      return res.json({ employees });
    }
    catch ( err ) {
      return res.json({message:`Error al realizar tu búsqueda. Intentalo de nuevo. Error: ${err}`})
    }
  },


  deleteEmployee: async (req, res, next) => {
    try {
      const user = await EmployeeServices.deleteEmployee(req.params.id);
      return res.json("Eliminado correctamente!");
    } catch (err) {
      return res.json({ message: `Error al eliminar empleado. Err: ${err}` })
    }
  }

};