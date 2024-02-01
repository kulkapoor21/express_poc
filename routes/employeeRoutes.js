import { Router } from 'express'
import EmployeeController from '../controller/employeeController.js'
const router = Router()

router.get('/findAllEmployees', EmployeeController.findAll)
router.get('/findEmployeeById/:id', EmployeeController.findEmployeeById)
router.post('/createEmployee', EmployeeController.createEmployee)
router.put('/updateEmployee/:id', EmployeeController.updateEmployee)
router.delete('/deleteEmployee/:id', EmployeeController.deleteEmployeeById)

export default router
