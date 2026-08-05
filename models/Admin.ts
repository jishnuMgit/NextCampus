import mongoose,{Schema}from "mongoose";

const AdminSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    employeeId: {
      type: String,
      unique: true,
    },

    designation: String,

    permissions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);