const express = require("express");
const app = express();
const connect = require("./src/config/db");
app.use(express.json());
//making connection
// models or schemas
const User = require('./src/models/user.model');
app.listen(2247, (req, res) => {
  try {
    connect();
    console.log(" connected successfully. listening on port 2247");
  } catch (err) {
    res.status(404).send("not connected with server");
  }
});
