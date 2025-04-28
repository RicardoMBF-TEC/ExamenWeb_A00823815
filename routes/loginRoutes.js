const express = require('express');
const LoginHandler = require('../handlers/loginHandler');
const loginHandler = new LoginHandler();

const router = express.Router();

router.post('/', (req, res) => loginHandler.login(req, res));

module.exports = router;