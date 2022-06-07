const express = require('express')
const router = express.Router()
const DepartmentController = require('../controller/department.controller')

router.get('/', DepartmentController.getDepartments);
router.get('/:id', DepartmentController.getDepartment);
router.post('/', DepartmentController.addDepartment);
router.put('/:id', DepartmentController.updateDepartment);
router.delete('/:id', DepartmentController.deleteDepartment);

module.exports = router;