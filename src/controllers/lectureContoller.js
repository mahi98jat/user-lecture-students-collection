const express = require("express");
const Lecture = require("../models/lecture.model");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    const user = User.findOne({ name: req.body.instructor });
    // console.log(user);

    Lecture.create({
      lecture_id: req.body.lecture_id,
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

router.get("/", (req, res) => {
  try {
    const data = Lecture.find().lean().exec();

    return res.status(200).send(data);
  } catch (err) {
    return res.status(201).send("some err occurs");
  }
});
router.get("/:id", (req, res) => {
    try {
      const data = Lecture.find({$lecture_id:req.params.id}).lean().exec();
  
      return res.status(200).send(data);
    } catch (err) {
      return res.status(201).send("some err occurs");
    }
  });

module.exports = router;
