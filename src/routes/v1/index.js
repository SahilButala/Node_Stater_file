const express = require('express');
const router = express.Router();


// ----------------- DECLARE ROUTES -----------------//
const sampleUserRoutes = require("./sample-user-routes")
// ----------------- DECLARE ROUTES -----------------//



// ----------------- ROUTES -----------------//
router.use("/sample" , sampleUserRoutes)
// ----------------- ROUTES -----------------//





module.exports = router;