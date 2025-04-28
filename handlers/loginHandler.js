const LoginController = require('../controllers/loginController');
const Result = require('./types/results'); // Using a structured response model

const loginController = new LoginController();

class LoginHandler {
    login(req, res) {
        const { username, password } = req.body;

        loginController.validateCredentials(username, password)
            .then(userData => {
                const result = new Result(`¡Hola, ${userData.fullName}! Bienvenido a SkyTech.`);
                res.json(result);
            })
            .catch(error => {
                res.status(401).json({ error: error.message });
            });
    }
}

module.exports = LoginHandler;
module.exports = LoginHandler;