const express = require("express");

const User = require("../models/user.model");

const router = express.Router();
// this router will post a new user in data base
router.post("/", (req, res) => {
  try {
    //console.log(req.body);
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_photo_url: req.body.profile_photo_url,
      roles: req.body.roles,
    });
    return res.send("user created successfully");
  } catch (err) {
    return res.send("data is not correct");
  }
});
// this route will give all the users list
router.get("/", async (req, res) => {
  try {
    const data = await User.find().lean().exec();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(401).send("data not found");
  }
});

module.exports = router;
