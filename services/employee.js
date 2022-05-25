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

  deleteEmployee : async (employeeId) => {
    await Model.Employee.destroy({
      where: {
        employee_id: employeeId
      }
    })
  }
}

