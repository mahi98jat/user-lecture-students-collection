const express = require("express");
const Lecture = require("../models/lecture.model");
const router = express.Router();




router.post("/", (req, res) => {
  console.log("getting some data here");
});

module.exports = router;