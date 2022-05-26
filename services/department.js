const pool = require('../config/db');
const DepartmentModel = require('../model/department');
const { Op } = require("sequelize");

module.exports = { 
  getDepartments : async () => { 
    try{
      const departments = await DepartmentModel.Department.findAll({ 
        where: {
          department_id : {
            [Op.notIn]: [101, 404]
          }, 
          is_active: {
            [Op.not]: false
          }
        } 
      });
      return departments;
    }catch(error){
      console.log(`Error al obtener los departamentos: Error: ${error}`);
    }
  },

  getDepartment : async (deptId) => { 
    try{
      const department = await DepartmentModel.Department.findOne({
        where: {department_id: deptId}
      })
      return department;
    }catch(error){
      console.log(`Error al obtener el departamento: Error: ${error}`);
    }
  },

  addDepartment : async (deptName) => { 
    try{
      await DepartmentModel.Department.create({
        department_name: deptName,
        is_active: true
      })
    }catch(error){
      console.log(`Error al agregar departamento: Error: ${error}`);
    }
  },

  updateDepartment : async (deptId, isActive, deptName) => { 
    try{
      await DepartmentModel.Department.update({
        department_id: deptId,
        department_name: deptName,
        is_active: isActive
      },
      {where: {
        department_id: deptId
      }
      })
    }catch (error) { 
      console.log(`Error al actualizar departamento: Error: ${error}`)
    }
  },

  deleteDepartment : async (deptId) => { 
    try{
      await DepartmentModel.Department.destroy({
        where: {
          department_id: deptId
        }
      })
    }catch (error) {
      console.log(`Error al eliminar departamento: error: ${error}`)
    }
  }

};