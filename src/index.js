const express = require('express');

const { ServerConfig , Logger } = require('./config');
const apiRoutes = require('./routes/index.js');
const { connectMONGODB } = require('./db/index.js');

require("dotenv").config()

const app = express();


// ----------------- DATABASE ENTRY  -----------------//
// connectMONGODB()
// ----------------- DATABASE ENTRY  -----------------//



// ----------------- MIDDELWARES -----------------//
app.use(express.json())
app.use(express.urlencoded({extended  : true})) 
// ----------------- MIDDELWARES -----------------//



// ----------------- ALL ROUTES -----------------//
app.use("/api" , apiRoutes)
// ----------------- ALL ROUTES -----------------//



// ----------------- SERVER RUNNING -----------------//
app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // Logger.info("Successfully started " , {}) you can enable to log the messages
});


// app.listen(process.env.PORT , ()=>{
//        console.log("Server is running at port : " , process.env.PORT)
// })



// ----------------- SERVER RUNNING -----------------//


// ----------------- GLOBAL ERROR HANDLER -----------------//
// ----------------- GLOBAL ERROR HANDLER -----------------//

