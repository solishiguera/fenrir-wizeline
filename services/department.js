const pool = require('../config/db');
const DepartmentModel = require('../model/department');
//findAll -> select * 
module.exports = { 
  getDepartments : () => { 
    try{
      const departments = await DepartmentModel.Department.findAll();
      return departments;
    }catch(error){
      console.log(`Error al obtener los departamentos: Error: ${error}`);
    }
  },

  getDepartment : (deptId) => { 
    try{
      const department = await DepartmentModel.Department.findOne({
        where: {department_id: deptId}
      })
      return department;
    }catch(error){
      console.log(`Error al obtener el departamento: Error: ${error}`);
    }
  },

  addDepartment : (deptName) => { 
    try{
      await DepartmentModel.Department.create({
        department_name: deptName,
        is_Active: true
      })
    }catch(error){
      console.log(`Error al agregar departamento: Error: ${error}`);
    }
  },

  updateDepartment : (deptId, isActive, deptName) => { 
    try{
      await DepartmentModel.Department.update({
        is_Active: isActive,
        department_name: deptName
      },
      {where: {
        department_id: deptId
      }
      })
    }catch (error) { 
      console.log(`Error al actualizar departamento: Error: ${error}`)
    }
  },

  deleteDepartment : (deptId) => { 
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