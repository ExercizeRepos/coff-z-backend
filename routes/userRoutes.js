const express = require("express");
const { getUser, createUser, updateUser } = require("../controllers/userController");
const { validateUserData } = require("../middlewares/userValidationMiddleware");

const router = express.Router();


// Get all User.js data
router.get("/", getUser);
// Create new User.js
router.post("/", createUser);
// Update User.js data
router.put("/", validateUserData, updateUser);

module.exports = router;
