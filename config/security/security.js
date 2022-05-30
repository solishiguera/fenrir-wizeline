const bcrypt = require('bcrypt');
const { json, append } = require('express/lib/response');
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = {
  securePassword : async (psw) => { 
    try {
      const hashedPsw = await bcrypt.hash(psw, 10);
      return hashedPsw;
    } catch (error) {
      console.log(`Error al cifrar contraseña: ${error}`)
    }
  }, 

  comparePassword : async(currPassword, savedPassword) => {
    try {
      if(!(await bcrypt.compare(currPassword, savedPassword))) {  
        throw 'Contraseña incorrecta';
      }

      
      return true; 
    } catch (error) {
      console.log(`Error de contraseña: ${error}`)
    }
  },

  authenticateToken : (req, res, next) => { 
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, employee) => {
      if(err) return res.sendStatus(403);
      req.employee = employee;
      next();
    })

    return true;
  },

  generateAccessToken : (user) => {
    const expiration = process.env.JWT_EXPIRATION
    return jwt.sign({user}, process.env.TOKEN_SECRET, { expiresIn: expiration + 's' })
  }, 

  generateRefreshToken : (user) => { 
    return jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET)
  }

};