const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// GET: Read all users
router.get("/users", usersController.getUsers);

// POST: Create a new user
router.post("/users", usersController.postUsers);

//PUT: Update
router.put("/users", usersController.updateUsers);

//DELETE: Delete
router.delete("/users/:id", usersController.deleteUser);

 //get user by id
 router.get("/users/:id", usersController.getUsersById);

module.exports = router;
