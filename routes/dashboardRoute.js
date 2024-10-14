const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");


router.get("/users", dashboardController.userPage);
router.get("/users/create", dashboardController.createPage);


module.exports = router;
