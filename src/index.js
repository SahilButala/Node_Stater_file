const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();


// ----------------- DATABASE ENTRY  -----------------//
// ----------------- DATABASE ENTRY  -----------------//



// ----------------- MIDDELWARES -----------------//
// ----------------- MIDDELWARES -----------------//



// ----------------- ALL ROUTES -----------------//
app.use('/api', apiRoutes);
// ----------------- ALL ROUTES -----------------//



// ----------------- SERVER RUNNING -----------------//
app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
// ----------------- SERVER RUNNING -----------------//


// ----------------- GLOBAL ERROR HANDLER -----------------//
// ----------------- GLOBAL ERROR HANDLER -----------------//

