const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');

router.post('/add-user', userController.addUser);
router.post('/login-user', userController.loginUser);
router.post('/add-topic', userController.addTopic);
router.get('/get-topic/:id', userController.getTopic);


module.exports = router;