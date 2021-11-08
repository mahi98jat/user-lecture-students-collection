const express = require("express");
const Student = require("../models/student.model");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("getting some data here");
});

module.exports = router;
