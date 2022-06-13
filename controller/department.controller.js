const DepartmentServices = require("../services/department.service");

module.exports = { 
  getDepartments : async (req, res, next) => {
    try {
      const departments = await DepartmentServices.getDepartments();
      return res.json({ departments });
    } catch (err) {
      res.json({ message: `Error al obtener departamentos. Err: ${err}` });
    }
  },

  getDepartment : async (req, res, next) => {
    try {
      const department = await DepartmentServices.getDepartment(req.params.id);
      return res.json({ department });
    } catch (err) {
      res.json({ message: `Error al obtener departamento con ID. Err: ${err}` });
    }
  },

  addDepartment : async (req, res, next) => {
    try {
      const departments = await DepartmentServices.addDepartment(req.body.department_name);
      return res.json('Agregado correctamente.');
    } catch (err) {
      res.json({ message: `Error al crear departamento. Err: ${err}` });
    }
  },

  updateDepartment : async (req, res, next) => {
    try {
      const departments = await DepartmentServices.updateDepartment(req.params.id, req.body.is_active, req.body.department_name);
      return res.json('Actualizado correctamente.');
    } catch (err) {
      res.json({ message: `Error al actualizar departamento. Err: ${err}` });
    }
  },
  
  deleteDepartment : async (req, res, next) => {
    try {
      const departments = await DepartmentServices.deleteDepartment(req.params.id);
      return res.json('Departamento eliminado exitosamente.');
    } catch (err) {
      res.json({ message: `Error al eliminar departamento. Err: ${err}` });
    }
  }

};