const AuthServices = require("../services/auth");
const SecureEnv = require("../config/security/security");

module.exports = { 
  login : async (req, res, next) => {
    try {
      
      const employee = await AuthServices.login(req.body.username);
      // Si no existe usuario
      if(Object.keys(employee).length === 0) { 
        throw 'Usuario no existe';
      }

      // Validate password
      const correctPassword = await SecureEnv.comparePassword(req.body.employee_password, employee['employee_password'])
      if(!correctPassword) { 
        throw 'Contraseña incorrecta';
      }

      const accessToken = SecureEnv.generateAccessToken(employee)
      const refreshToken = SecureEnv.generateRefreshToken(employee)
      const save = AuthServices.saveRefreshToken(refreshToken, employee['username'])

      res.json({accessToken, refreshToken})
    } catch (err) {
      res.json({ message: `Error al inciar sesión. Err: ${err}` });
    }
  },

  logout : async (req, res, next) => {
    const deleteToken = AuthServices.deleteRefreshToken(req.body.refreshToken)
    res.send(204)
  },

  token : async (req, res, next) => {

  },

  signup : async (req, res, next) => { 
    try {
      const securePsw = await SecureEnv.securePassword(req.body.employee_password);
      const employee = await AuthServices.signup(req.body.employee_name, req.body.employee_last_name, req.body.department_id, req.body.job_title, req.body.username, securePsw);
      const accessToken = SecureEnv.generateAccessToken(employee)
      const refreshToken = SecureEnv.generateRefreshToken(employee)
      const save = AuthServices.saveRefreshToken(refreshToken, employee[0]['username'])

      res.json({accessToken, refreshToken}) 
    } catch (err) {
      res.json({ message: `Error al registrar nuevo empleado. Err: ${err}` });
    }
  }
}