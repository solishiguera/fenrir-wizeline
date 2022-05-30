const pool = require('../config/db');
const timestamp = new Date();
const Model = require('../model/employee');

module.exports = { 
  /** 
   * @duplicate ? 
  */
  updateEmployee : async (employeeId, isAdmin) => {
    try {
      await Model.Employee.update({ is_admin: isAdmin }, {
        where: {
          employee_id: employeeId
        }
      });
    } catch (error) { 
      console.log(`Error al actualizar empleado: Error: ${error}`)
    }
  }, 
  
  getEmployeesByQuery: async (search) => {
    try {
      const questions = await Model.Employee.findAll({
          where: {full_text_search: {[Op.match]: sequelize.fn('to_tsquery', search)}}
      })
      return questions
    } catch (error) {
      console.log(`Error al obtener preguntas: Error: ${error}`)
    }
  },

  updateIndexOfEmployees: async () => {
    try {
      await Model.Employee.update({ 
        full_text_search: sequelize.fn('to_tsvector', sequelize.col('full_text_search'))
      }, 
      { 
        where: {
          full_text_search: null
        }
      });
    } catch (error) { 
      console.log(`Error al agregar índices pregunta: Error: ${error}`)
    }
  },

  deleteEmployee : async (employeeId) => {
    await Model.Employee.destroy({
      where: {
        employee_id: employeeId
      }
    })
  }
}

