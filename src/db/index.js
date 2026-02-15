const mongoodb = require("mongoose");
const mysql = require("mysql2")

// two db --> mongo | Mysql


// Main function to call db base on type of db
exports.ConnectDataBase = async () => {
  if (process.env.DB_TYPE === "mongo") {
    await connectMONGODB();
  } else if (process.env.DB_TYPE === "Mysql") {
    await connectMySQL();
  }
};
// Main function to call db base on type of db




// ----------------- MONGODB CONNECTION -----------------//
exports.connectMONGODB = async () => {
  try {
    await mongoodb
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Database Connected successfully.."))
      .catch((err) => console.log(err));
    process.exit(1);
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      success: false,
      message: error?.message || "Mongoodb error when try to conncet to db",
    };
  }
};
// ----------------- MONGODB CONNECTION -----------------//

// ----------------- My SQL CONNECTION -----------------//


// note : if we used sequelize cli for mysql so dont need to export this controller , for that we used config file in that we mention all things
exports.connectMySQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
    });

    console.log("MySQL connected successfully...");
    return connection;
  } catch (error) {
    console.error("MySQL connection error:", error.message);
    process.exit(1);
  }
};
// ----------------- My SQL CONNECTION -----------------//
