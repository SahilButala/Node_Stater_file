

const express= require("express")
const router  = express.Router()



const {SampleUserController} = require("../../controllers")

router.post("/" , SampleUserController.createSampleUser)



module.exports = router