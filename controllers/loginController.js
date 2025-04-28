const employees = require('../db/employees');

class LoginController {
  async validateCredentials(username, password) {
    const employee = employees.find(
      (emp) => emp.username === username && emp.password === password
    );

    if (!employee) {
      throw new Error('Invalid credentials');
    }

    return {
      fullName: employee.fullName,
      email: employee.email,
    };
  }
}

module.exports = LoginController;