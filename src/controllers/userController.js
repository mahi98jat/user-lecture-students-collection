const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("getting some data here from user controller");
  res.send("getting some data from user controller");
});

module.exports = router;
