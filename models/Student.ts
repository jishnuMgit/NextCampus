import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    admissionNo: {
      type: String,
      unique: true,
    },

    rollNo: Number,

    class: String,

    section: String,

    academicYear: String,

    dob: Date,

    gender: String,

    bloodGroup: String,

    address: String,

    admissionDate: Date,

    parent: {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },

    emergencyContact: String,

    transport: Boolean,

    hostel: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);