import mongoose, { Schema } from "mongoose";

const ParentSchema = new Schema(
  {
    fatherName: {
      type: String,
      trim: true,
    },

    motherName: {
      type: String,
      trim: true,
    },

    guardianName: {
      type: String,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    occupation: {
      type: String,
    },

    annualIncome: {
      type: Number,
    },

    address: {
      type: String,
    },

    children: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Parent ||
  mongoose.model("Parent", ParentSchema);