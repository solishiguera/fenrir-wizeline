const EmployeeServices = require("../services/employee.service");
const SecureEnv = require("../config/security/security");

module.exports = {

  getEmployeesByQuery:async ( req, res, next ) => {
    try {
      const employees = await EmployeeServices.getEmployeesByQuery(req.params.text);
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