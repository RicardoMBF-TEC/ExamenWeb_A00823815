const employees = require('../db/employees');

class LoginController {
    validateCredentials(username, password) {
        return new Promise((resolve, reject) => {
            const employee = employees.find(
                (emp) => emp.username === username && emp.password === password
            );

            if (!employee) {
                reject(new Error('Invalid credentials'));
            } else {
                resolve({
                    fullName: employee.fullName,
                    email: employee.email,
                });
            }
        });
    }
}

module.exports = LoginController;