const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//Load Config File
dotenv.config({ path: "./config/config.env" });

//call DB connection Function
connectDB();

//initialize app
const app = express();

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
