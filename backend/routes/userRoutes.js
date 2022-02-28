const express = require('express')
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const router = express.Router();

router
    .post('/', registerUser)
    .post('/login', loginUser)
    .get('/me', getMe);

module.exports = router;