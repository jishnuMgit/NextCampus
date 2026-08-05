import mongoose, { Schema } from "mongoose";

const TeacherSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    teacherId: {
      type: String,
      unique: true,
    },

    qualification: String,

    experience: Number,

    department: String,

    subjects: [String],

    classes: [String],

    joiningDate: Date,

    salary: Number,

    address: String,

    gender: String,

    dob: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Teacher ||
  mongoose.model("Teacher", TeacherSchema);