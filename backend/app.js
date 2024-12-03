const cors = require("cors");
const connectDB = require("./db/db");
const express = require("express");
const env = require("dotenv");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const app = express();
env.config();
connectDB();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
