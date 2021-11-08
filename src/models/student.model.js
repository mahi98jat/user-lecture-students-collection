const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    roll_number: { required: true, type: String },
    user_id: { required: true, type: String },
    batch: {
      required: true,
      type: String,
    },
  },
  {
    varsionKey: false,
    timestamps: true,
  }
);
const Student = mongoose.model("student", studentSchema);
module.exports = Student;
