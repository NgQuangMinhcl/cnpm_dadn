const express = require('express');
const User_controller = require('../controller/user_controller');


const router = express.Router();

router.post('/register', User_controller.user_register);
router.post('/login', User_controller.user_login);
router.post('/change-password', User_controller.user_change_password);

router.get('/get-user', User_controller.user_get_user);

module.exports = {
    router
}