const LoginController = require('../controllers/loginController');
const loginController = new LoginController();

class LoginHandler {
    async login(request, response) {
        try {
            const { username, password } = request.body;
            const userData = await loginController.validateCredentials(username, password);
            
            response.json({
                fullName: userData.fullName
            });

        } catch (error) {
            response.status(401).json({ error: 'CREDENCIALES INVALIDAS! Intente de nuevo.' });
        }
    }
}

module.exports = LoginHandler;