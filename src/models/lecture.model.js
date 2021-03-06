const mongoose = require("mongoose");
const lectureSchema = new mongoose.Schema(
  {
    lecture_id: { required: true, type: String },
    title: { required: true, type: String },
    instructor: { required: true, type: String },
    batch: { required: true, type: String },
  },
  {
    varsionKey: false,
    timestamps: true,
  }
);
const Lecture = mongoose.model("lecture", lectureSchema);
module.exports = Lecture;
