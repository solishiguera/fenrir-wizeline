const AuthServices = require("../services/auth.service");
const SecureEnv = require("../config/security/security");
const jwt_decode = require('jwt-decode');
const jwt = require("jsonwebtoken");

module.exports = { 
  login : async (req, res, next) => {
    try {
      
      const employee = await AuthServices.login(req.body.username);
      const payload = await AuthServices.safePayload(req.body.username)

      // Si no existe usuario
      if(employee === null) { 
        throw 'Usuario no existe';
      }

      // Validate password
      const correctPassword = await SecureEnv.comparePassword(req.body.employee_password, employee['employee_password'])
      if(!correctPassword) { 
        throw 'Contraseña incorrecta';
      }

      const accessToken = SecureEnv.generateAccessToken(payload)
      const refreshToken = SecureEnv.generateRefreshToken(payload)

      AuthServices.saveRefreshToken(refreshToken, employee['username'])

      return res.json({accessToken, refreshToken})
    } catch (err) {
      return res.json({ message: `Error al inciar sesión. Err: ${err}` });
    }
  },

  logout : async (req, res, next) => {
    AuthServices.deleteRefreshToken(req.body.refreshToken)
    res.sendStatus(204)
  },

  token : async (req, res, next) => {
    try {
      const refreshToken = req.body.refreshToken

      const storedToken = await AuthServices.validateRefreshToken(refreshToken)
      if(storedToken == null) throw 'Invalid token'

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)

        if(new Date() > storedToken['expiration_date']) {
          AuthServices.deleteRefreshToken(refreshToken)
          throw 'Expired token. Please sign in again.'
        }

        // Create new access token, payload only contains id
        const accessToken = SecureEnv.generateAccessToken({employee_id: user['user']['employee_id']})

        // Return new access token and curr refresh token 
        res.json({accessToken, refreshToken})
      })
    } catch (error) {
      res.json(`Error al solicitar token: Err: ${error}`)
    }
  },

  signup : async (req, res, next) => { 
    try {
      const securePsw = await SecureEnv.securePassword(req.body.employee_password);
      const employee = await AuthServices.signup(req.body.employee_name, req.body.employee_last_name, req.body.department_id, req.body.job_title, req.body.username, securePsw);
      const accessToken = SecureEnv.generateAccessToken(employee)
      const refreshToken = SecureEnv.generateRefreshToken(employee)
      AuthServices.saveRefreshToken(refreshToken, employee['username'])
      AuthServices.updateIndexOfEmployees();
      return res.json({accessToken, refreshToken}) 
    } catch (err) {
      res.json({ message: `Error al registrar nuevo empleado. Err: ${err}` });
    }
  }
}