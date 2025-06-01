const express = require("express");
const router = new express.Router();
const accController = require("../controllers/accountController");
const utilities = require("../utilities");
const regValidate = require('../utilities/account-validation')

// Login view
router.get("/login", utilities.handleErrors(accController.buildLogin));


// Register view
router.get("/register", utilities.handleErrors(accController.buildRegister));

// Process of registration
router.post("/register", 
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accController.registerAccount));


module.exports = router;

