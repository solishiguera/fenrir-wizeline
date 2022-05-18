const UserServices = require("../services/employee");
const SecureEnv = require("../config/security/security");

module.exports = {
  /**
  * @deprecated Will be deleted soon. Use login instead.
  */
  userSignin: async (req, res, next) => {
    try {
      const employee = await UserServices.userSignin(req.body.username);
      res.json({ employee });
    } catch (err) {
      res.json({ message: `Error al obtener empleado. Err: ${err}` });
    }
  },


  /**
  * @deprecated Will be deleted soon. Use signup instead.
  */
  addEmployee: async (req, res, next) => {
    try {
      const securePsw = await SecureEnv.securePassword(req.body.employee_password);
      const employee = await UserServices.addEmployee(req.body.employee_name, req.body.employee_last_name, req.body.department_id, req.body.job_title, req.body.username, securePsw);
      const accessToken = SecureEnv.generateAccessToken(employee)
      res.json({accessToken})
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