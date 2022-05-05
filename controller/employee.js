const UserServices = require("../services/employee");
const SecureEnv = require("../config/security/security");

module.exports = {
  userSignin: async (req, res, next) => {
    try {
      const employee = await UserServices.userSignin(req.body.username);
      res.json({ employee });
    } catch (err) {
      res.json({ message: `Error al obtener empleado. Err: ${err}` });
    }
  },

  addEmployee: async (req, res, next) => {
    try {
      const securePsw = await SecureEnv.securePassword(req.body.employee_password);
      const employee = await UserServices.addEmployee(req.body.employee_name, req.body.employee_last_name, req.body.job_title, req.body.username, securePsw);
      res.json( { employee } );
    } catch (err) {
      res.json({ message: `Error al agregar empleado. Err: ${err}` });
    }
  },

  login: async (req, res, next) => {
    try {
      
      const employee = await UserServices.login(req.body.username);

      // Si no existe usuario
      if(Object.keys(employee).length === 0) { 
        throw 'Usuario no existe';
      }

      const correctPassword = await SecureEnv.comparePassword(req.body.employee_password, employee[0]['employee_password'])
      if(!correctPassword) { 
        throw 'Contraseña incorrecta';
      }

      const accessToken = SecureEnv.authorizeUser(employee)
      res.json({accessToken})
    } catch (err) {
      res.json({ message: `Error al obtener usuario. Err: ${err}` });
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