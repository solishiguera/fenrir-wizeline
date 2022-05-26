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
  
  getEmployeesByQuery:(search) =>{
    sql = 'SELECT * FROM employee WHERE full_text_search @@ to_tsquery($1)'
    return new Promise((resolve, reject) => {
      pool.query(sql,[search],(err,res)=>{
        if(err){
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  updateIndexOfEmployees:() =>{
    sql = 'UPDATE employee SET full_text_search = (to_tsvector(employee_text)) WHERE full_text_search IS null'
    return new Promise((resolve, reject) => {
      pool.query(sql,(err,res)=>{
        if(err){
          return reject(err)
        }
        return resolve(res.rows)
      })
    })
  },

  deleteEmployee : async (employeeId) => {
    await Model.Employee.destroy({
      where: {
        employee_id: employeeId
      }
    })
  }
}

