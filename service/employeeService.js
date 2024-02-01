import Employee from '../model/employee.js'

export default class employeeService {
  static findAllEmployees = async () => {
    try {
      const allEmployees = await Employee.find()
      return allEmployees;
    } catch (err) {
      throw new Error(`Couldn't fetch Employees: ${err}`)
    }
  }

  static findEmployeeById = async (id) => {
    try {
      const Employee = await Employee.findById(id)
      return Employee;
    } catch (err) {
      throw new Error(`Couldn't fetch Employee by ID: ${id}: ${err}`)
    }
  }

  static updateEmployee = async (id, updateEmployeeBody) => {
    try {
      const updateResponse = await Employee.findOneAndUpdate(
        { employeeId: id },
        updateEmployeeBody,
        { new: true } //will return updated object
      )
      return updateResponse
    } catch (err) {
      throw new Error(`Couldn't Update Employee by ID: ${id}: ${err}`)
    }
  }

  static createEmployee = async (employee) => {
    try {
      const newEmployee = {
        employeeId: employee.employeeId,
        name: employee.name ? employee.name : "",
        position: employee.position ? employee.position : "unknown",
        department: employee.department ? employee.department : "unknown",
      }
      const response = await new Employee(newEmployee).save()
      return response
    } catch (err) {
      throw new Error(`Unable to create Employee: ${id}: ${err}`)
    }
  }

  static deleteEmployeeById = async (id) => {
    try {
      const deletedResponse = await Employee.findOneAndDelete({ employeeId: id })
      console.log("deletedResponse", deletedResponse)
      return deletedResponse
    } catch (err) {
      throw new Error(`Unable to delete Employee ID: ${id}: ${err}`)
    }
  }
}
