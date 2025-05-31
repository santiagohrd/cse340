const express = require("express");
const router = new express.Router();
const accController = require("../controllers/accountController");
const utilities = require("../utilities");

// Login view
router.get("/login", utilities.handleErrors(accController.buildLogin));


// Register view
router.get("/register", utilities.handleErrors(accController.buildRegister));


module.exports = router;

