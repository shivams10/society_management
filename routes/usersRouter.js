const router = require('express').Router()
const usersController =  require("../controllers/usersController");


router.post('/users', usersController.addUser);
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getOneUser);
router.patch('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);


module.exports = router;