const express = require("express");
const Lecture = require("../models/lecture.model");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    const user = User.findOne({ name: req.body.instructor });
   // console.log(user);

    Lecture.create({
      title: req.body.title,
      instructor: req.body.instructor,
      batch: req.body.batch,
    });
    return res.status(200).send("data added successfully");
  } catch (err) {
    return res
      .status(201)
      .send("data not posted only a lecturer or admin can post");
  }
});

router.post("/", (req, res) => {
  console.log("getting some data here");
});

module.exports = router;
