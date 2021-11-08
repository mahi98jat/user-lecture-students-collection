const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const connect = require("./src/config/db");

const userControllers = require("./src/controllers/userController");
const studentControllers = require("./src/controllers/studentController");
const lectureControllers = require("./src/controllers/lectureContoller");
app.use(express.json());

//making connection
// models or schemas

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", userControllers);
app.use("/students", studentControllers);
app.use("/lecture", lectureControllers);

app.listen(2247, (req, res) => {
  try {
    connect();
    console.log(" connected successfully. listening on port 2247");
  } catch (err) {
    res.status(404).send("not connected with server");
  }
});
