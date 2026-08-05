import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  role: "admin" | "teacher" | "student" | "parent";
  isVerified: boolean;
  isActive: boolean;
  password: string;
lastLogin: Date;
}

const UserSchema:Schema=new Schema<IUser>(
    {
    name:   {
         type: String, required: true 
        },
    email: { 
        type: String, required: true, unique: true 
    },
    phone: {
         type: String, required: true
         },
    role: { 
        type: String, enum: ["admin", "teacher", "student", "parent"], required: true
     },
    isVerified: {
         type: Boolean, default: false 
        },
    isActive: {
        type: Boolean, default: true
     },
    password: { 
        type: String, required: true
     },
    lastLogin: { 
        type: Date }
})


export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);