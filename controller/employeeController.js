import EmployeeService from "../service/employeeService.js";

export default class EmployeeController {
  static findAll = async (req, res) => {
    try {
      const allEmployee = await EmployeeService.findAllEmployees()
      if (!allEmployee) {
        res.status(404).json("There's no Employee published yet")
      }
      res.status(200).json(allEmployee)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static findEmployeeById = async (req, res) => {
    try {
      const Employee = await EmployeeService.findEmployeeById(req.params.id)
      res.status(200).json(Employee)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static updateEmployee = async (req, res) => {
    try {
      const updatedEmployee = await EmployeeService.updateEmployee(req.params.id, req.body)
      if (!updatedEmployee) {
        res.status(404).json(`Unable to update Employee`)
      }
      res.status(200).json(updatedEmployee)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static createEmployee = async (req, res) => {
    try {
      const employee = await EmployeeService.createEmployee(req.body)
      res.status(200).json(employee)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static deleteEmployeeById = async (req, res) => {
    try {
      const deletedResponse = await EmployeeService.deleteEmployeeById(req.params.id)
      res.status(200).json(deletedResponse)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}
