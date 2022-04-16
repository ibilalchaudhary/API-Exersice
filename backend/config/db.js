const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(`DB is connected on: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DBConnect;
